<script setup>
import { ref } from 'vue'
//components
import GameHeader from '@/components/GameHeader.vue'
import GameQuestion from '@/components/GameQuestion.vue'
import Result from '@/components/Result.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
//helpers
import { questions } from '@/consts.js'
import { getRandomCategories } from '@/helpers.js'

const apiQuestions = ref(questions)
const question = ref({})
const loading = ref(true)

console.log(getRandomCategories(apiQuestions))

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <section v-else>
    <GameHeader />
    <main class="page-content">
      <GameQuestion :question="question" />
    </main>
  </section>
</template>

<style scoped>
.page-content {
  height: 100vh;
  background-color: wheat;
}
</style>
