const getAnswersAarray = (wrongAnswers, correctAnswer) => {
  const answers = wrongAnswers
  answers.push(correctAnswer)
  return answers.sort(() => Math.random() - 0.5)
}

const getRandomCategories = (questions) => {
  const categories = []

  const questionCategories = questions.map((question) => {
    return question.category
  })

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * questionCategories.length)
    if(hasSameName(categories, questionCategories[randomIndex])) {
      i--
      continue
    }
    categories.push(questionCategories[randomIndex])
  }

  return categories
}

const hasSameName = (categoriesList, category) => {
  for (let i = 0; i < categoriesList.length; i++) {
    if (category === categoriesList[i]) return true
  }

  return false
}

const getRandomQuestion = (questions, selectedCategory) => {
  const categoryQuestions = questions.filter((question) => {
    return question.category === selectedCategory
  })

  const randomIndex = Math.floor(Math.random() * categoryQuestions.length)
  const randomQuestion = categoryQuestions[randomIndex]

  questions.splice(randomIndex, 1)
  return randomQuestion
}

const handlePointsOnAnswer = (answer, difficulty) => {
  switch (difficulty) {
    case 'easy':
      return answer ? 100 : -50
    case 'medium':
      return answer ? 200 : -100
    case 'hard':
      return answer ? 300 : -150
    default:
      return 0
  }
}

export { getAnswersAarray, getRandomCategories, getRandomQuestion, handlePointsOnAnswer }
