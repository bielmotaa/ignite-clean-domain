import { Entity } from '@/core/entities/entity.js'

// Entidade que representa o instrutor (professor),
// quem responde as duvidas (Question) dos alunos

interface InstructorProps {
  // nome de quem responde as duvidas (Question) dos alunos
  name: string
}

// <InstructorProps> preenche o <Props> generico do Entity, ou seja, diz ao Entity 
// o tipo de formato dessa entidade
export class Instructor extends Entity<InstructorProps> {
  constructor(props: InstructorProps, id?: string) {
     // enviando o id e a props recebidas para o construtor da minha classe Entity
    super(props, id)

  }
}