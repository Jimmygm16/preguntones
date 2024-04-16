<script setup>
import GameHeader from '@/components/GameHeader.vue'
import GameQuestion from '@/components/GameQuestion.vue'
import Result from '@/components/Result.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

import { fetchQuestions } from '@/API/questions'
import { ref } from 'vue'

const questions = ref([])
const question = ref({})
const loading = ref(true)

const takeQuestions = async () => {
  await fetchQuestions(questions, loading)
  question.value = questions.value[0]
}

takeQuestions()
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <section v-else>
    <GameHeader />
    <main class="page-content">
      <Result />
      <!-- <GameQuestion :question="question" /> -->
    </main>
  </section>
</template>

<style scoped>
.page-content {
  height: 100vh;
  background-color: wheat;
}
</style>
