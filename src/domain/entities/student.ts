import { Entity } from "@/core/entities/entity.js"
import type { UniqueEntityID } from "@/core/entities/unique-entity-id.js"
import type { Optional } from "@/core/types/optional.js"
// Entidade que representa o aluno, quem posta as duvidas (Question)
// no forum
interface StudentProps {
    // nome do aluno, quem posta as duvidas (Question) no forum
    name: string
}

// nao preciso declarar constructor aqui na classe filha:
// o JS usa o da classe mae (Entity) e repassa as props e o id automaticamente.
export class Student extends Entity<StudentProps> {
     // o static eh um metodo fixo na minha classe, e o create eh o meu pedreiro:
    // toda vez que eu quiser criar uma nova Question,
    // eu chamo Question.create (meu metodo de criacao - execute)
    static create(props: StudentProps, id?: UniqueEntityID) {
        const student = new Student(props, id)
        // O construtor não tem return: o `new` já devolve a instância.
        // O return abaixo é do `create`, que entrega essa instância a quem o chamou.
        return student
    }
}