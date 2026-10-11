import { randomUUID } from "node:crypto"

// entidade que representa o aluno, quem posta as duvidas (Question) 
// no forum
export class Student {
    public id: string
    public name: string

    constructor(name: string, id?: string) {
        this.name = name
        // se eu passo o id, eh por conta que eu estou querendo realizar uma referencia a um Student
        // ja criado, caso eu nao passo, eu crio com um ID -randomUUID (ou seja, crio esse novo Student)
        this.id = id ?? randomUUID()
    }
}