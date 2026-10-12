import { Entity } from "@/core/entities/entity.js"
// Entidade que representa o aluno, quem posta as duvidas (Question)
// no forum
interface StudentProps {
    // nome do aluno, quem posta as duvidas (Question) no forum
    name: string
}

export class Student extends Entity<StudentProps> {
    constructor(props: StudentProps, id?: string) {
        // enviando o id e as props para o construtor da minha classe Entity
        super(props, id)
    }
}