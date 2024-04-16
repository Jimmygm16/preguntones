const getAnswersAarray = (wrongAnswers, correctAnswer) => {
  const answers = wrongAnswers
  answers.push(correctAnswer)
  return answers.sort(() => Math.random() - 0.5)
}

export { getAnswersAarray }
