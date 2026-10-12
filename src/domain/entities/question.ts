import { Entity } from "@/core/entities/entity.js"
import type { Slug } from "./value-objects/slug.js"
import type { UniqueEntityID } from "@/core/entities/unique-entity-id.js"

// Entidade que representa uma duvida postada no forum,
// a qual recebe respostas (Answer)

interface QuestionProps {
    // o id de quem esta' criando a pergunta (normalmente um Student)

    // nao eh mais uma string solta, eh um OBJETO da classe UniqueEntityID.
    // pra definir o valor eu preciso criar o objeto com new:
    // authorId: new UniqueEntityID('id-do-aluno')
    // e pra ler o valor de volta: question.authorId.toValue()
    authorId: UniqueEntityID

    // o id da Answer (resposta) que foi escolhida como a melhor para essa pergunta.
    bestAnswerId?: UniqueEntityID

    // titulo da duvida, e' a partir dele que o slug eh gerado
    title: string
    // conteudo da duvida (o texto completo da pergunta)
    content: string
    // versao do titulo amigavel para URL (ex: "como-criar-uma-api"),
    // e' um Value Object, entao sempre passa pela normalizacao do Slug
    slug: Slug

    createdAt: Date // data de criacao
    updatedAt?: Date // data de atualizacao da resposta 
}

// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.
// seria o mesmo que fazer:
// constructor(props: QuestionProps, id?: string) {
//   // enviando o id e as props para o construtor da minha classe Entity
//   super(props, id)
// }
// so seria necessario declarar se eu quisesse fazer algo a mais (valor padrao, validacao...)
// exemplo, gerar o slug a partir do title quando ele nao for informado:
// constructor(props: QuestionProps, id?: string) {
//   super({ ...props, slug: props.slug ?? Slug.createFromText(props.title) }, id)
// }
// dentro da classe filha, mas na hora de instanciar essa classe dessa entidade
// em um objeto eu preciso passar as props (e, opcionalmente, o id)
// exemplo:
// const question = new Question({ title, content, slug, authorId })           // id gerado automaticamente
// const existente = new Question({ title, content, slug, authorId }, 'id-123')  // referencia a uma pergunta ja criada
export class Question extends Entity<QuestionProps> { }

