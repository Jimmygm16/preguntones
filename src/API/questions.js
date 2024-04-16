const fetchQuestions = async (questions, loading) => {
  try {
    const res = await fetch('https://opentdb.com/api.php?amount=10')
      .then((res) => res.json())
      .then((data) => {
        questions.value.push(...data.results)
      })
      .finally(() => {
        loading.value = false
      })
  } catch (error) {
    console.error(error)
  }
}

export { fetchQuestions }
