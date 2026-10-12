import { randomUUID } from "node:crypto"
import type { Slug } from "./value-objects/slug.js"


interface QuestionProps {
    title: string
    content: string
    slug: Slug
    authorId: string
}

// entidade que representa uma duvida postada no forum, 
// a qual recebe respostas (Answer)
export class Question {
    public id: string
    public title: string
    public slug: Slug
    public content: string //conteudo da duvida
    // o id de quem esta' criando a pergunta
    public authorId: string

    constructor(props: QuestionProps, id?: string) {
        this.title = props.title
        this.content = props.content
        this.slug = props.slug 
        this.authorId = props.authorId
        // se eu passo o id, eh por conta que eu estou querendo realizar uma referencia a um Question
        // ja criado, caso eu nao passo, eu crio com um ID -randomUUID (ou seja, crio esse novo Question)
        this.id = id ?? randomUUID()

    }
}

