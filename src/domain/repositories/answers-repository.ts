import { Answer } from "../entities/answer.js";

// contrato (interface): os metodos que devem conter no repositorio
// ela so DECLARA o que pode ser feito, nao tem codigo dentro.
// quem faz o trabalho de verdade eh uma classe que IMPLEMENTA essa interface,
// sem o dominio saber onde as respostas ficam guardadas (banco, memoria, etc.)
//
// exemplo 1: nos testes, salva num array em memoria
//
//   class InMemoryAnswersRepository implements AnswersRepository {
//     public items: Answer[] = []
//
//     async create(answer: Answer) {
//       this.items.push(answer)
//     }
//   }
//
// exemplo 2: em producao, salva no banco
//
//   class PrismaAnswersRepository implements AnswersRepository {
//     async create(answer: Answer) {
//       await prisma.answer.create({ data: { ... } })
//     }
//   }
//
// o caso de uso recebe qualquer uma das duas e so chama o create
export interface AnswersRepository {
  // recebe uma Answer ja criada (new Answer) e persiste ela (salva)
  // retorna Promise<void> pois eh assincrono e nao devolve nada, so confirma que salvou
  create(answer: Answer): Promise<void>
}