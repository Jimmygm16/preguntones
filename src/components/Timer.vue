<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  time: Number
})
const emit = defineEmits(['emitCountDownIsOver'])

const timer = ref(props.time)
let intervalId = setInterval(countdown, 1000)

function countdown() {
  if (timer.value > 0) {
    timer.value -= 1
  } else {
    emit('emitCountDownIsOver')
    clearInterval(intervalId)
  }
}
</script>

<template>
  <div class="time-container">
    <span class="time">
      {{ timer }}
    </span>
  </div>
</template>

<style scoped>
.time-container {
  border: solid 0.1rem black;
  border-radius: 1rem;
  background-color: beige;
  width: fit-content;
  padding: 1rem 3rem;
  position: relative;
  top: -4rem;
}

.time {
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--red);
}
</style>
