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
//
// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.
// seria o mesmo que fazer:
// constructor(props: AnswerProps, id?: string) {
//   // enviando o id e as props para o construtor da minha classe Entity
//   super(props, id)
// }
// so seria necessario declarar se eu quisesse fazer algo a mais (valor padrao, validacao...)
// exemplo, tirar os espacos das pontas do content:
// constructor(props: AnswerProps, id?: string) {
//   super({ ...props, content: props.content.trim() }, id)
// }
// dentro da classe filha, mas na hora de instanciar essa classe dessa entidade
// em um objeto eu preciso passar as props (e, opcionalmente, o id)
// exemplo:
// const answer = new Answer({ content, authorId, questionId })           // id gerado automaticamente
// const existente = new Answer({ content, authorId, questionId }, 'id-123')  // referencia a uma resposta ja criada
export class Answer extends Entity<AnswerProps> {
    // caso eu queira consultar alguma prop em lugares que nao estendem minha classe Entity,
    // onde estao as props das minhas entidades, eu uso o get
    get content() {
        return this.props.content
    }
}