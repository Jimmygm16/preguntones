const fetchQuestions = async (questions) => {
  try {
    const res = await fetch('https://opentdb.com/api.php?amount=10')
      .then((res) => res.json())
      .then((data) => {
        questions.value.push(...data.results)
      })
  } catch (error) {
    console.error(error)
  }
}

export { fetchQuestions }
