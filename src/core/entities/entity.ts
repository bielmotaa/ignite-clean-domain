import { UniqueEntityID } from "./unique-entity-id.js"

// quase todas as minhas entidades têm id e props (interfaces),
// então eu posso criar uma classe base no core para isso, para componentizar
export class Entity<Props> {
  // deixo o _id privado para que quem estender (extends) não possa alterar o id, apenas a classe
  private _id: UniqueEntityID
  // protected: só a própria classe e quem a estende (extends) conseguem acessar as props;
  // de fora (ex: entity.props) não dá para acessar nem alterar.
  // Crio uma única props, genérica (Props), que vai receber as propriedades
  // específicas de cada entidade que estender essa classe (Question, Answer...)
  protected props: Props

  get id() {
    return this._id
  }

  constructor(props: Props, id?: string) {
    this.props = props
    // se eu passo o id na props, eh por conta que eu estou querendo realizar uma referencia
    // ja criado, caso eu nao passo, eu crio com um ID -randomUUID (ou seja, crio esse novo Instructor, Stund ...)
    this._id = new UniqueEntityID(id)
  }
}