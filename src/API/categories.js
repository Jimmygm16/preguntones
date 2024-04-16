const getCategroies = async (target) => {
  const response = await fetch('https://opentdb.com/api_category.php')
  const data = await response.json()
  target = data.trivia_categories
  console.log(target)
}

export { getCategroies }
