<script setup>
import { ref } from 'vue'
import { getAnswersAarray } from '../helpers.js'

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['emitHandleAnswer'])

// Full set of answers
const questionAnswers = ref([])
const answered = ref(false)

questionAnswers.value = getAnswersAarray(
  props.question.incorrect_answers,
  props.question.correct_answer
)

const isMultipleChoice = props.question.type === 'multiple'

const onQuestionAnswered = (index) => {
  answered.value = true

  setTimeout(() => {
    if (isCorrectAnswer(index)) {
      emit('emitHandleAnswer', true)
    } else {
      emit('emitHandleAnswer', false)
    }
  }, 1500)
}

const isCorrectAnswer = (index) => {
  const isCorrectAnswer = index === questionAnswers.value.indexOf(props.question.correct_answer)
  console.log(isCorrectAnswer, props.question.correct_answer, questionAnswers.value[index])
  answered.value = true
  return isCorrectAnswer
}

setTimeout(() => {
  isCorrectAnswer(-1)
}, 10000)
</script>

<template>
  <section class="question-card" v-if="isMultipleChoice">
    <h2 class="question-title">
      {{ props.question.question }}
    </h2>
    <ul class="questions-answers" v-if="!answered">
      <li
        class="answer"
        v-for="(answer, index) in questionAnswers"
        v-bind:key="index"
        @click="onQuestionAnswered(index)"
      >
        <span>
          {{ answer }}
        </span>
      </li>
    </ul>
    <ul class="questions-answers" v-else>
      <li
        class="answered"
        v-for="(answer, index) in questionAnswers"
        v-bind:key="index"
        :style="{
          backgroundColor: isCorrectAnswer(index) ? 'rgba(0,255,0,0.3)' : 'rgba(255,0,0,0.3)'
        }"
      >
        <span>
          {{ answer }}
        </span>
      </li>
    </ul>
  </section>
  <section class="question-card" v-else>
    <h2 class="question-title">
      {{ props.question.question }}
    </h2>
    <div class="boolean-questions" v-if="!answered">
      <div
        class="bool-answer"
        v-for="(answer, index) in questionAnswers"
        v-bind:key="index"
        @click="onQuestionAnswered(index)"
      >
        <span>
          {{ answer }}
        </span>
      </div>
    </div>
    <div class="boolean-questions" v-else>
      <div
        class="bool-answered"
        v-for="(answer, index) in questionAnswers"
        v-bind:key="index"
        :style="{
          backgroundColor: isCorrectAnswer(index) ? 'rgba(0,255,0,0.3)' : 'rgba(255,0,0,0.3)'
        }"
      >
        <span>
          {{ answer }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.question-card {
  background-color: #ddd;
  border-radius: 10px;
  width: 65dvw;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .question-title {
    position: relative;
    height: auto;
    bottom: 3rem;
    background-color: #ccc;
    margin: 0;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0.8rem 2rem;
    width: fit-content;
    max-width: 60dvw;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .questions-answers {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    list-style-type: none;
    margin: 0;
    padding: 0;

    .answer {
      background-color: #fff;
      border-radius: 5px;
      padding: 0.5rem 0.8rem;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background-color 0.1s;

      &:hover {
        background-color: #f0f0f0;
      }
    }

    .answered {
      border-radius: 5px;
      padding: 0.5rem 0.8rem;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background-color 0.1s;
    }
  }
}

.boolean-questions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.bool-answer {
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  padding: 1rem 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
}

.bool-answered {
  border-radius: 10px;
  width: 50%;
  padding: 1rem 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
