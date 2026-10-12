import { Entity } from "@/core/entities/entity.js"

// Entidade que representa a resposta dada a uma duvida (Question),
// normalmente escrita por um Instructor

interface AnswerProps {
    //conteudo da respota
    content: string
    //O id do professor ou aluno que responder a questao/pergunta
    authorId: string
    //O id de qual perginta esta sendo respondida
    questionId: string
}

// <AnswerProps> preenche o <Props> generico do Entity, ou seja, diz ao Entity 
// o tipo de formato dessa entidade
export class Answer extends Entity<AnswerProps> {
    
    constructor(props: AnswerProps, id?: string) {
        // enviando o id para o construtor da minha classe Entity
        super(props, id)
    }

    // caso eu queira consultar alguma prop em lugares que nao estendem minha classe Entity,
    // onde estao as props das minhas entidades, eu uso o get
    get content() {
        return this.props.content
    }
}