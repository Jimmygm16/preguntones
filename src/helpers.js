const getAnswersAarray = (wrongAnswers, correctAnswer) => {
  const answers = [...wrongAnswers, correctAnswer]
  return answers.sort(() => Math.random() - 0.5)
}

export { getAnswersAarray }
