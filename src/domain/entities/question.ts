import { randomUUID } from "node:crypto"

// entidade que representa uma duvida postada no forum, 
// a qual recebe respostas (Answer)
export class Question {
    public id: string
    public title: string
    public content: string //conteudo da duvida

    constructor(title: string, content: string, id?: string) {
        this.title = title
        this.content = content
        // se eu passo o id, eh por conta que eu estou querendo realizar uma referencia a um Question
        // ja criado, caso eu nao passo, eu crio com um ID -randomUUID (ou seja, crio esse novo Question)
        this.id = id ?? randomUUID()
    }
}