<script setup>
import GameQuestion from '@/components/GameQuestion.vue'
// x
import { ref } from 'vue'

// const questionCategories = ref([])
// const loading = ref(true)
const questions = ref([])

const fetchQuestions = async () => {
  const response = await fetch(`https://opentdb.com/api.php?amount=10`)
  const data = await response.json()
  questions.value = data.results
}

fetchQuestions()

// const selectRandomCategories = async () => {
//   const getCategroies = async () => {
//     const response = await fetch('https://opentdb.com/api_category.php')
//     const data = await response.json()
//     questionCategories.value = data.trivia_categories
//   }

//   await getCategroies()
//   const randomCategories = []

//   for (let i = 0; i < 8; i++) {
//     const randomIndex = Math.floor(Math.random() * questionCategories.value.length)
//     if (randomCategories.includes(questionCategories.value[randomIndex])) {
//       i--
//       continue
//     }
//     randomCategories.push(questionCategories.value[randomIndex])
//   }

//   questionCategories.value = randomCategories
//   loading.value = false
// }

// selectRandomCategories()
</script>

<template>
  <main class="main-content">
    <!-- <div class="menu" v-if="loading == false">
      <SpinWheel :questionTypes="questionCategories" />
    </div> -->
    <GameQuestion :question="questions[0]" />
  </main>
</template>
