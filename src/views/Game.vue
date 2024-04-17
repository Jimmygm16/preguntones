<script setup>
import { ref } from 'vue'

//components
import GameHeader from '@/components/GameHeader.vue'
import GameQuestion from '@/components/GameQuestion.vue'
import { useRouter } from 'vue-router'
import Result from '@/components/Result.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import SpinWheel from '@/components/SpinWheel.vue'
import Timer from '@/components/Timer.vue'

//helpers
import { questions } from '@/consts.js'
import { getRandomCategories, getRandomQuestion, handlePointsOnAnswer } from '@/helpers.js'

const router = useRouter()
const apiQuestions = ref(questions)
const selectedCategory = ref('')
const question = ref({})
const loading = ref(true)
const answerRotation = ref(0)
const stages = ref([true, false, false])
const rounds = ref(5)

const updateSelectedCategory = (category, endedStage) => {
  selectedCategory.value = category
  handleStages(endedStage)
}

const handleStages = (stage) => {
  console.log(rounds.value)
  stages.value = [false, false, false]
  if (stage === 3 && rounds.value > 0) {
    rounds.value -= 1
    setTimeout(() => {
      stages.value[0] = true
    }, 1500)
  } else if (stage === 3 && rounds.value === 0) {
    endGame()
  }

  if (stage === 1) {
    setTimeout(() => {
      question.value = getRandomQuestion(apiQuestions.value, selectedCategory.value)
      stages.value[stage] = true
      console.log(stage)
    }, 2000)
  } else if (stage === 2) {
    answerRotation.value = answerRotation.value === 1 ? 0 : 1
    handleStages(3)
  }
}

const endGame = () => {
  stages.value = [false, false, false]
  router.push('/result')
}

const CountDownIsOver = () => {
  handleAnswer(false)
}

const handleAnswer = (answer) => {
  const players = JSON.parse(localStorage.getItem('characters'))
  if (answer) {
    players[answerRotation.value].score += handlePointsOnAnswer(answer, question.value.difficulty)
    localStorage.setItem('characters', JSON.stringify(players))
  } else {
    players[answerRotation.value].score += handlePointsOnAnswer(answer, question.value.difficulty)
    players[answerRotation.value].lives -= 1
    localStorage.setItem('characters', JSON.stringify(players))
    if (players[answerRotation.value].lives === 0) {
      endGame()
      return
    }
  }
  if (answerRotation.value === 1) {
    handleStages(2)
  } else {
    answerRotation.value = answerRotation.value === 1 ? 0 : 1
    handleStages(1)
  }

  // console.log(rounds.value, answerRotation.value, answer)
  // const players = JSON.parse(localStorage.getItem('characters'))
  // if (!answer && players[answerRotation.value].lives > 1) {
  //   players[answerRotation.value].lives -= 1
  // } else if (!answer && players[answerRotation.value].lives === 1) {
  //   players[answerRotation.value].lives -= 1
  //   endGame()
  //   return
  // }
  // players[answerRotation.value].score += handlePointsOnAnswer(answer, question.value.difficulty)
  // localStorage.setItem('characters', JSON.stringify(players))

  // if (answerRotation.value === 1) {
  //   handleStages(2)
  // } else {
  //   answerRotation.value = answerRotation.value === 1 ? 0 : 1
  //   handleStages(1)
  // }
}

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <section v-else>
    <GameHeader />
    <main class="page-content">
      <div class="stage-1" v-if="stages[0]">
        <SpinWheel
          :questionTypes="getRandomCategories(apiQuestions)"
          :updateSelectedCategory="updateSelectedCategory"
        />
      </div>
      <div class="question-content" v-if="stages[1]">
        <!-- <Timer :time="10" @emitCountDownIsOver="CountDownIsOver" /> -->
        <GameQuestion :question="question" @emitHandleAnswer="handleAnswer" />
      </div>
    </main>
  </section>
</template>

<style scoped>
.page-content {
  height: 100vh;
  background-color: wheat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stage-1 {
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.2);
}

.question-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
