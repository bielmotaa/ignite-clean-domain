import { Entity } from "@/core/entities/entity.js"
import type { Slug } from "./value-objects/slug.js"

// Entidade que representa uma duvida postada no forum,
// a qual recebe respostas (Answer)

interface QuestionProps {
    // titulo da duvida, e' a partir dele que o slug eh gerado
    title: string
    // conteudo da duvida (o texto completo da pergunta)
    content: string
    // versao do titulo amigavel para URL (ex: "como-criar-uma-api"),
    // e' um Value Object, entao sempre passa pela normalizacao do Slug
    slug: Slug
    // o id de quem esta' criando a pergunta (normalmente um Student)
    authorId: string
}


export class Question extends Entity<QuestionProps> {
    constructor(props: QuestionProps, id?: string) {
        //Enviando o id e as props para o construtor da minha classe Entity
        super(props, id)
    }
}

