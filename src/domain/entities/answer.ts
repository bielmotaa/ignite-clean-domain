import { Entity } from "@/core/entities/entity.js"
import type { UniqueEntityID } from "@/core/entities/unique-entity-id.js"
import type { Optional } from "@/core/types/optional.js"

// Entidade que representa a resposta dada a uma duvida (Question),
// normalmente escrita por um Instructor

interface AnswerProps {
    //O id do professor ou aluno que responder a questao/pergunta
    // nao eh mais uma string solta, eh um OBJETO da classe UniqueEntityID.
    // pra definir o valor eu preciso criar o objeto com new:
    // authorId: new UniqueEntityID('id-do-professor')
    // e pra ler o valor de volta: answer.authorId.toValue()
    authorId: UniqueEntityID
    //O id de qual perginta esta sendo respondida
    // tambem eh um OBJETO UniqueEntityID, mesma regra do authorId:
    // questionId: new UniqueEntityID('id-da-pergunta')
    questionId: UniqueEntityID

    //conteudo da respota
    content: string

    createdAt: Date // data de criacao
    updatedAt?: Date // data de atualizacao da resposta 
}

// <AnswerProps> preenche o <Props> generico do Entity, ou seja, diz ao Entity 
// o tipo de formato dessa entidade
//
// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.


export class Answer extends Entity<AnswerProps> {
    // caso eu queira consultar alguma prop em lugares que nao estendem minha classe Entity,
    // onde estao as props das minhas entidades, eu uso o get

    get authorId() {
        return this.props.authorId
    }

    get questionId() {
        return this.props.questionId
    }


    get content() {
        return this.props.content
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    get excerpt() { //Resumo da resposta
        return this.content
            .substring(0, 120) // me devolver apenas os primeiros 120 caracteres
            .trimEnd() // tirar qualquer espaco do final
            .concat('...') // concatenar com a respostar 
    }

    
    //atualizar a data de edicao
    //vou usar esse metodo toda vez que eu atualizar algum outro valor
    private touch() {
        this.props.updatedAt = new Date()
    }

    // alterendo o valor do conteudo
    set content(content: string) {
        this.props.content = content
        this.touch() //chamando a funcao a cima para editar a data de atualizacao
    }

    // o static eh um metodo fixo na minha classe, e o create eh o meu pedreiro:
    // toda vez que eu quiser criar uma nova Question,
    // eu chamo Question.create (meu metodo de criacao - execute)
    static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityID) {
        const answer = new Answer({
            ...props,
            createdAt: new Date()
        }, id)

        // O construtor não tem return: o `new` já devolve a instância.
        // O return abaixo é do `create`, que entrega essa instância a quem o chamou.
        return answer
    }
}