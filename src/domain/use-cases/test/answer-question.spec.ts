import { expect, test } from "vitest"
import { AnswerQuestionUseCase } from "@/domain/use-cases/answer-question.js"


test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  // Aqui eu espero que o retorno de answer seja o proprio content (a resposta)
  expect(answer.content).toEqual('Nova resposta')
})