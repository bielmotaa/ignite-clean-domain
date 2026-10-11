import { randomUUID } from "node:crypto"


interface AnswerProps {
    content: string
    authorId: string
    questionId: string
}

// entidade que representa a resposta dada a uma duvida (Question),
// normalmente escrita por um Instructor
export class Answer {
    public id: string
    public content: string //conteudo da respota
    //O id do professor ou aluno que responder a questao/pergunta
    public authorId: string
    //O id de qual perginta esta sendo respondida
    public questionId: string

    constructor(props: AnswerProps, id?: string) {
        this.content = props.content
        this.authorId = props.authorId
        this.questionId = props.questionId    
        this.id = id ?? randomUUID()
    } 
}