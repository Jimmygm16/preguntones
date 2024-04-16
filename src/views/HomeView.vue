<script setup>
import SpinWheel from '@/components/SpinWheel.vue'
import { ref } from 'vue'

const questionCategories = ref([])
const loading = ref(true)

const selectRandomCategories = async () => {
  const getCategroies = async () => {
    const response = await fetch('https://opentdb.com/api_category.php')
    const data = await response.json()
    questionCategories.value = data.trivia_categories
  }

  await getCategroies()
  const randomCategories = []

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * questionCategories.value.length)
    randomCategories.push(questionCategories.value[randomIndex])
  }

  questionCategories.value = randomCategories
  loading.value = false
}

selectRandomCategories()

// const fetchQuestions = async () => {
//   const response = await fetch('https://opentdb.com/api.php?amount=10')
//   const data = await response.json()
//   qs.value = data.results
// }

// fetchQuestions()
</script>

<template>
  <section v-if="loading">Cargando</section>
  <section v-else>
    <SpinWheel :questionTypes="questionCategories" />
  </section>
</template>

<style scoped></style>
