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
        // cria a resposta (Answer) com o conteudo informado
        // obs: instructorId e questionId ainda nao sao usados, 
        // a Answer so guarda (cria) o content por enquanto
        const answer = new Answer(content)

        return answer // retornando a respota
    }
}