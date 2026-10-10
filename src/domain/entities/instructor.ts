import { randomUUID } from 'node:crypto'

// entidade que representa o instrutor (professor),
//  quem responde as duvidas (Question) dos alunos
export class Instructor {
  public id: string
  public name: string

  constructor(name: string, id?: string) {
    this.name = name
    // se eu passo o id, eh por conta que eu estou querendo realizar uma referencia a um Instructor
    // ja criado, caso eu nao passo, eu crio com um ID -randomUUID (ou seja, crio esse novo Instructor)
    this.id = id ?? randomUUID()
  }
}