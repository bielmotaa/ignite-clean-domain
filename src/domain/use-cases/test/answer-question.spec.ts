import { expect, test } from "vitest"
import { AnswerQuestionUseCase } from "@/domain/use-cases/answer-question.js"
import type { AnswersRepository } from "@/domain/repositories/answers-repository.js";
import type { Answer } from "@/domain/entities/answer.js";

// repositorio "fake" (dublê de teste): implementa a interface AnswersRepository
// sem banco de dados nenhum. o caso de uso so exige no construtor alguem que
// respeite esse contrato (tenha interface com os metodos nela definida)
const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  }
}


test('create an answer', async () => {
  // injeto o repositorio fake no construtor do caso de uso
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  // verifica se a resposta criada tem o mesmo content que foi enviado
  expect(answer.content).toEqual('Nova resposta')
})