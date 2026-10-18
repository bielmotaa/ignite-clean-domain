import { Answer } from "@/domain/entities/answer.js"
import type { AnswersRepository } from "../repositories/answers-repository.js"
import { UniqueEntityID } from "@/core/entities/unique-entity-id.js"

// dados que o caso de uso precisa receber para executar
interface AnswerQuestionUseCaseRequest {
    instructorId: string // quem esta respondendo
    questionId: string // qual pergunta esta sendo respondida
    content: string // texto da resposta escrito pelo instrutor
}

// caso de uso: representa a acao de um 
// instrutor respondendo uma pergunta do aluno
export class AnswerQuestionUseCase {
    constructor(
        private answerRepository: AnswersRepository
    ) { }

    async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        // PASSO 1: cria o objeto Answer so em memoria (new Answer)
        // ainda NAO foi pro banco, eh apenas a entidade montada com os dados
        // authorId recebe o instructorId (o autor da resposta eh o instrutor)
        // questionId liga a resposta a pergunta que esta sendo respondida
        const answer = Answer.create({
            content,
            authorId: new UniqueEntityID(instructorId),
            questionId: new UniqueEntityID(questionId),
        })

        // PASSO 2: salva (persiste) a Answer que foi criada acima
        // aqui sim vai pro banco, atraves do repositorio
        await this.answerRepository.create(answer)

        return answer // retornando a respota
    }
}