<script setup>
import { ref } from 'vue'
import { getAnswersAarray } from '../helpers.js'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  }
})
// Full set of answers
const questionAnswers = ref([])
questionAnswers.value = getAnswersAarray(props.answers, props.correctAnswer)

const isMultipleChoice = props.type === 'multiple'
</script>

<template>
  <section class="question-card" v-if="isMultipleChoice">
    <h2 class="question-title">
      {{ props.question }}
    </h2>
    <ul class="questions-answers">
      <li class="answer" v-for="(answer, index) in questionAnswers" v-bind:key="index">
        <span>
          {{ answer }}
        </span>
      </li>
    </ul>
  </section>
  <section class="question-card" v-else></section>
</template>

<style scoped>
.question-card {
  background-color: #ddd;
  border-radius: 10px;
  width: 65dvw;
  padding: 1rem;
  position: absolute;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
  }
}
</style>
