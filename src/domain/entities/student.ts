import { Entity } from "@/core/entities/entity.js"
// Entidade que representa o aluno, quem posta as duvidas (Question)
// no forum
interface StudentProps {
    // nome do aluno, quem posta as duvidas (Question) no forum
    name: string
}

// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.
// seria o mesmo que fazer:
// constructor(props: StudentProps, id?: string) {
//   // enviando o id e as props para o construtor da minha classe Entity
//   super(props, id)
// }
// so seria necessario declarar se eu quisesse fazer algo a mais (valor padrao, validacao...)
// exemplo, um valor padrao para o name:
// constructor(props: StudentProps, id?: string) {
//   super({ ...props, name: props.name ?? 'Aluno' }, id)
// }
// dentro da classe filha, mas na hora de instanciar essa classe dessa entidade
// em um objeto eu preciso passar as props (e, opcionalmente, o id)
// exemplo:
// const student = new Student({ name: 'Ana' })           // id gerado automaticamente
// const existente = new Student({ name: 'Ana' }, 'id-123')  // referencia a um aluno ja criado
export class Student extends Entity<StudentProps> {}