const getAnswersAarray = (wrongAnswers, correctAnswer) => {
  console.log(wrongAnswers)
  console.log(correctAnswer)
  const answers = wrongAnswers
  answers.push(correctAnswer)
  return answers.sort(() => Math.random() - 0.5)
}

const getRandomCategories = (questions) => {
  const categories = []

  const questionCategories = questions.value.filter((question) => {
    return question.category
  })

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * questionCategories.length)
    if (
      categories.includes(questionCategories[randomIndex]) ||
      hasSameName(categories, questionCategories[randomIndex])
    ) {
      i--
      continue
    }
    categories.push(questionCategories[randomIndex])
  }

  return categories
}

const hasSameName = (categoriesList, category) => {
  for (let i = 0; i < categoriesList.length; i++) {
    if (category.category === categoriesList[i].category) return true
  }

  return false
}

export { getAnswersAarray, getRandomCategories }
