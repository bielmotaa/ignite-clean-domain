import { randomUUID } from "node:crypto"

// entidade que representa a resposta dada a uma duvida (Question),
// normalmente escrita por um Instructor

export class Answer {
  public id: string
  public content: string //conteudo da respota

  constructor(content: string, id?: string) {
    this.content = content
    this.id = id ?? randomUUID()
  }
}