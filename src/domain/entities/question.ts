import { Entity } from "@/core/entities/entity.js"
import type { Slug } from "./value-objects/slug.js"
import type { UniqueEntityID } from "@/core/entities/unique-entity-id.js"
import type { Optional } from "@/core/types/optional.js"

// Entidade que representa uma duvida postada no forum,
// a qual recebe respostas (Answer)

interface QuestionProps {
    // o id de quem esta' criando a pergunta (normalmente um Student)

    // nao eh mais uma string solta, eh um OBJETO da classe UniqueEntityID.
    // pra definir o valor eu preciso criar o objeto com new:
    // authorId: new UniqueEntityID('id-do-aluno')
    // e pra ler o valor de volta: question.authorId.toValue()
    authorId: UniqueEntityID

    // o id da Answer (resposta) que foi escolhida como a melhor para essa pergunta.
    bestAnswerId?: UniqueEntityID

    // titulo da duvida, e' a partir dele que o slug eh gerado
    title: string
    // conteudo da duvida (o texto completo da pergunta)
    content: string
    // versao do titulo amigavel para URL (ex: "como-criar-uma-api"),
    // e' um Value Object, entao sempre passa pela normalizacao do Slug
    slug: Slug

    createdAt: Date // data de criacao
    updatedAt?: Date // data de atualizacao da resposta 
}

// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.

// A classe eh a planta da coisa
export class Question extends Entity<QuestionProps> {
    // o static eh um metodo fixo na minha classe, e o create eh o meu pedreiro:
    // toda vez que eu quiser criar uma nova Question,
    // eu chamo Question.create (meu metodo de criacao - execute)
    static create(props: Optional<QuestionProps, 'createdAt'>, id?: UniqueEntityID) {
        const question = new Question({
            ...props,
            createdAt: new Date()
        }, id)

        // O construtor não tem return: o `new` já devolve a instância.
        // O return abaixo é do `create`, que entrega essa instância a quem o chamou.
        return question
    }
}



