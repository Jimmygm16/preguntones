const getAnswersAarray = (wrongAnswers, correctAnswer) => {
  const answers = wrongAnswers
  answers.push(correctAnswer)
  answers.sort(() => Math.random() - 0.5)
  return answers
}

const getRandomCategories = (questions) => {
  const categories = []

  const questionCategories = questions.map((question) => {
    return question.category
  })

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * questionCategories.length)
    const categoryQuestions = questions.filter((question) => {
      return question.category === questionCategories[randomIndex]
    })
    if(hasSameName(categories, questionCategories[randomIndex]) || categoryQuestions.length <= 2) {
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

  console.log(categoryQuestions.length)

  const randomIndex = Math.floor(Math.random() * categoryQuestions.length)
  const randomQuestion = categoryQuestions[randomIndex]

  const originalQuestionIndex = questions.indexOf(randomQuestion)
  questions.splice(originalQuestionIndex, 1)
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
