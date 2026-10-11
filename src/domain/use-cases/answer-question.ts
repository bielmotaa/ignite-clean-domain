import { Answer } from "@/domain/entities/answer.js"

// dados que o caso de uso precisa receber para executar
interface AnswerQuestionUseCaseRequest {
    instructorId: string // quem esta respondendo
    questionId: string // qual pergunta esta sendo respondida
    content: string // texto da resposta escrito pelo instrutor
}

// caso de uso: representa a acao de um 
// instrutor respondendo uma pergunta do aluno
export class AnswerQuestionUseCase {
    execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        // cria a resposta (Answer) referente a questao/pergunta criada
        const answer = new Answer({
            content,
            authorId: instructorId,
            questionId,
          })
        return answer // retornando a respota
    }
}