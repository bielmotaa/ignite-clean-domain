# Por que criar a entidade e salvar no banco são dois passos?

Dúvida: no `AnswerQuestionUseCase`, por que fazer `new Answer(...)` e depois
`answerRepository.create(answer)`, em vez de salvar logo no banco?

## Os dois passos

```ts
// PASSO 1: cria o objeto só em memória (ainda NÃO foi pro banco)
const answer = new Answer({
  content,
  authorId: instructorId,
  questionId,
})

// PASSO 2: salva (persiste) a Answer criada acima
await this.answerRepository.create(answer)
```

| | O que faz | Onde o dado fica |
|---|---|---|
| `new Answer({...})` | Monta o objeto com `content`, `authorId` e `questionId` | Só em memória |
| `answerRepository.create(answer)` | Pega o objeto pronto e o salva | No banco, via repositório |

`authorId` recebe o `instructorId` (o autor da resposta é o instrutor) e
`questionId` liga a resposta à pergunta que está sendo respondida.

## Por que separar

### 1. A entidade não deve saber de banco

O `new Answer` pertence ao domínio. Se o construtor salvasse no banco, o domínio
passaria a depender de Postgres, Prisma etc., e perderia a independência que o
DDD busca. Quem salva é o repositório, a camada responsável por isso.

### 2. Dá para criar sem salvar

Criar e salvar nem sempre acontecem juntos:

- validar a `Answer` antes de persistir (conteúdo vazio, instrutor sem permissão);
- montar a resposta, disparar um evento ("resposta criada") e só então salvar;
- em testes, criar a entidade sem tocar em nada externo.

### 3. Testar fica fácil

Com o salvamento separado, nos testes você injeta um repositório em memória e
verifica o resultado sem nenhum banco rodando.

### 4. Trocar de banco não mexe no domínio

Se sair do Postgres para o MongoDB, só muda a classe do repositório. A `Answer`
e o caso de uso continuam iguais.

## Como o repositório funciona

A interface só **declara** o que pode ser feito, sem código dentro:

```ts
export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
```

Quem faz o trabalho de verdade é uma classe que **implementa** essa interface:

```ts
// nos testes: salva num array
class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}

// em produção: salva no banco
class PrismaAnswersRepository implements AnswersRepository {
  async create(answer: Answer) {
    await prisma.answer.create({ data: { /* ... */ } })
  }
}
```

O caso de uso recebe qualquer uma das duas e só chama `create`, sem saber onde
o dado vai parar.

| Peça | Papel |
|---|---|
| `AnswersRepository` (interface) | Define **o que** pode ser feito: `create` |
| `InMemoryAnswersRepository` / `Prisma...` (classes) | Definem **como** é feito |
| `AnswerQuestionUseCase` | **Usa** o `create`, sem se importar com o como |

## Analogia

Preencher um formulário (`new Answer`) e arquivá-lo no armário (`create`) são
ações distintas. Quem preenche não precisa saber **qual** armário nem **onde**
ele fica. Só entrega o formulário pronto para quem arquiva.
