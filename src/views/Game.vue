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
const playersInfo = ref(JSON.parse(localStorage.getItem('characters')))
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
    question.value = getRandomQuestion(apiQuestions.value, selectedCategory.value)
    setTimeout(() => {
      stages.value[stage] = true
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
  if (answer) {
    playersInfo.value[answerRotation.value].score += handlePointsOnAnswer(
      answer,
      question.value.difficulty
    )
    localStorage.setItem('characters', JSON.stringify(playersInfo.value))
  } else {
    playersInfo.value[answerRotation.value].score += handlePointsOnAnswer(
      answer,
      question.value.difficulty
    )
    playersInfo.value[answerRotation.value].lives -= 1
    localStorage.setItem('characters', JSON.stringify(playersInfo.value))
    if (playersInfo.value[answerRotation.value].lives === 0) {
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
}

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <section v-else>
    <audio controls autoplay hidden loop>
      <source src="../assets/audio/creepy-devil-dance-166764.mp3" type="audio/mp3" />
    </audio>
    <GameHeader :info="playersInfo" />
    <main class="page-content">
      <div class="stage-1" v-if="stages[0]">
        <SpinWheel
          :questionTypes="getRandomCategories(apiQuestions)"
          :updateSelectedCategory="updateSelectedCategory"
        />
      </div>
      <div class="question-content" v-if="stages[1]">
        <Timer :time="20" @emitCountDownIsOver="CountDownIsOver" />
        <GameQuestion :question="question" @emitHandleAnswer="handleAnswer" />
      </div>
      <div v-if="!stages[0] && !stages[1] && !stages[2]">
        <div class="loading-card" v-if="answerRotation === 0">
          <img :src="playersInfo[0].url_img1" alt="Player one avatar" />
          <h2>{{ playersInfo[0].character1 }} turn's!</h2>
        </div>
        <div class="loading-card" v-else>
          <img :src="playersInfo[1].url_img2" alt="Player two avatar" />
          <h2>{{ playersInfo[1].character2 }} turn's!</h2>
        </div>
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

.loading-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
