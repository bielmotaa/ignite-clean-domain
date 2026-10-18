import { Entity } from '@/core/entities/entity.js'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id.js'

// Entidade que representa o instrutor (professor),
// quem responde as duvidas (Question) dos alunos

interface InstructorProps {
  // nome de quem responde as duvidas (Question) dos alunos
  name: string
}

// <InstructorProps> preenche o <Props> generico do Entity, ou seja, diz ao Entity 
// o tipo de formato dessa entidade
//
// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.
// seria o mesmo que fazer:
// constructor(props: InstructorProps, id?: string) {
//   // enviando o id e as props para o construtor da minha classe Entity
//   super(props, id)
// }
// so seria necessario declarar se eu quisesse fazer algo a mais (valor padrao, validacao...)
// exemplo, um valor padrao para o name:
// constructor(props: InstructorProps, id?: string) {
//   super({ ...props, name: props.name ?? 'Instrutor' }, id)
// }
// dentro da classe filha, mas na hora de instanciar essa classe dessa entidade
// em um objeto eu preciso passar as props (e, opcionalmente, o id)
// exemplo:
// const instructor = new Instructor({ name: 'Ana' })           // id gerado automaticamente
// const existente = new Instructor({ name: 'Ana' }, 'id-123')  // referencia a um instrutor ja criado
export class Instructor extends Entity<InstructorProps> {
      // o static eh um metodo fixo na minha classe, e o create eh o meu pedreiro:
    // toda vez que eu quiser criar uma nova Question,
    // eu chamo Question.create (meu metodo de criacao - execute)
    static create(props: InstructorProps, id?: UniqueEntityID) {
      const instructor = new Instructor(props, id)
      // O construtor não tem return: o `new` já devolve a instância.
      // O return abaixo é do `create`, que entrega essa instância a quem o chamou.
      return instructor
  }
}