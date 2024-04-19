<script setup>
import { onMounted, ref } from 'vue'

const info = ref(JSON.parse(localStorage.getItem('characters')))
const result = ref('')
console.log(info.value[0].url_img1)

const winner = () => {
  if (info.value[0].score > info.value[1].score) {
    result.value = info.value[0].character1 + ' wins'
  } else if (info.value[0].score == info.value[1].score) {
    result.value = 'Draw'
  } else {
    result.value = info.value[1].character2 + ' wins'
  }
  console.log(result.value)
}
winner()
</script>

<template>
  <div class="result-container">
    <div class="player-info">
      <span class="text"> {{ info[0].character1 }}</span>
      <span class="text"> {{ info[0].score + ' points' }} </span>
    </div>
    <div class="player-info">
      <span class="text"> {{ info[1].character2 }} </span>
      <span class="text"> {{ info[1].score + ' points' }} </span>
    </div>
    <div class="result">
      <span class="text">{{ result }}</span>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 128, 0, 0.721);
  padding: 2rem 4rem;
  width: 50%;
  height: 50%;
  border: solid 1rem rgb(128, 65, 65);
  border-radius: 1rem;
  gap: 1rem;
}

.text {
  font-size: 2rem;
  font-weight: 900;
  color: white;
}

.player-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result {
  border-bottom: solid 0.4rem white;
  padding: 0.2rem 2rem;
}
</style>
