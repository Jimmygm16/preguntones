<script setup>
import { ref } from 'vue'

const props = defineProps({
  questionTypes: {
    type: Array,
    required: true
  },
  updateSelectedCategory: {
    type: Function,
    required: true
  }
})

const selectedCategory = ref(props.questionTypes[1])

const formatQuestionType = (questionType) => {
  if (questionType.includes(':')) {
    return questionType.split(':')[1]
  } else {
    return questionType
  }
}

setTimeout(() => {
  props.updateSelectedCategory(selectedCategory.value, 1)
}, 5000)
</script>

<template>
  <section class="container">
    <div class="wheel-center"></div>
    <section class="wheel">
      <div
        class="option"
        v-for="(questionType, index) in props.questionTypes"
        v-bind:key="index"
        :style="{
          '--i': index + 1,
          '--color': '#' + Math.floor(Math.random() * 16777215).toString(16)
        }"
      >
        <span>{{ formatQuestionType(questionType) }}</span>
      </div>
    </section>
  </section>
</template>

<style scoped>
.container {
  position: relative;
  width: 40dvw;
  height: 40dvw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .wheel-center {
  position: absolute;
  width: 5dvw;
  height: 5dvw;
  background-color: seashell;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #333;
  user-select: none;
}

.container .wheel-center::before {
  content: '';
  position: absolute;
  right: -2.4dvw;
  width: 2.5dvw;
  height: 2dvw;
  background-color: #333;
  clip-path: polygon(100% 50%, 0% 100%, 0 0);
  z-index: 9;
}

.container .wheel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 6px #333,
    0 0 0 15px #fff,
    0 0 0 1rem #111;
  animation: rotateWheel 5s linear;
}

@keyframes rotateWheel {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.container .wheel .option {
  position: absolute;
  width: 50%;
  height: 50%;
  background: var(--color);
  transform-origin: bottom right;
  transform: rotate(calc(72deg * var(--i)));
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0 80%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.container .wheel .option span {
  position: relative;
  transform: rotate(45deg);
  font-size: 1rem;
  color: #000;
  user-select: none;
}
</style>
