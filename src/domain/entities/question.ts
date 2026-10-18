import dayjs from "dayjs"
import { Entity } from "@/core/entities/entity.js"
import { Slug } from "./value-objects/slug.js"
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
    bestAnswerId?: UniqueEntityID | undefined

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
    get authorId() {
        return this.props.authorId
    }

    get bestAnswerId() {
        return this.props.bestAnswerId
    }

    get title() {
        return this.props.title
    }

    get content() {
        return this.props.content
    }

    get slug() {
        return this.props.slug
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    //retorna um boolean, para sabemos se a pergunta eh recente ou nao
    get isNew(): boolean {
        //valido a createdAt em relacao a data de hoje, em dias e retorno True se for menor ou igual a 3 b     
        return dayjs().diff(this.createdAt, 'days') <= 3
    }

    get excerpt() {
        return this.content
            .substring(0, 120)
            .trimEnd()
            .concat('...')
    }

      
    //atualizar a data de edicao
    //vou usar esse metodo toda vez que eu atualizar algum outro valor
    private touch() {
        this.props.updatedAt = new Date()
    }

    set title(title: string) {
        this.props.title = title
        this.props.slug = Slug.createFromText(title) // quando eu atualizo o title eu devo atualizar tb o meu slug do meu title
        this.touch() //chamando a funcao a cima para editar a data de atualizacao
    }

    set content(content: string) {
        this.props.content = content
        this.touch() //chamando a funcao a cima para editar a data de atualizacao
    }

    // define qual resposta foi escolhida como a melhor desta pergunta
    // guarda apenas o id da resposta (UniqueEntityID), nao a resposta inteira
    set bestAnswerId(bestAnswerId: UniqueEntityID | undefined) {
        this.props.bestAnswerId = bestAnswerId
        this.touch() //chamando a funcao a cima para editar a data de atualizacao
    }

    // o static eh um metodo fixo na minha classe, e o create eh o meu pedreiro:
    // toda vez que eu quiser criar uma nova Question,
    // eu chamo Question.create (meu metodo de criacao - execute)

    // esse Optional<..> eh apenas para deixar os campos opcionais
    static create(props: Optional<QuestionProps, 'createdAt' | 'slug' >, id?: UniqueEntityID) {
        const question = new Question({
            ...props,
            slug: props.slug ?? Slug.createFromText(props.title), // posso gerar um slug a partir do title
            createdAt: new Date()
        }, id)

        // O construtor não tem return: o `new` já devolve a instância.
        // O return abaixo é do `create`, que entrega essa instância a quem o chamou.
        return question
    }
}



