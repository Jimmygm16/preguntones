<script setup>
const props = defineProps({
  show: Boolean,
  result: Object
})
</script>

<template>
  <div class="result-container">
    <div class="player-info">
      <span class="text"> Player 1 </span>
      <span class="text"> 1300 ptos </span>
    </div>
    <div class="player-info">
      <span class="text"> Player 2 </span>
      <span class="text"> 1600 ptos </span>
    </div>
    <div class="result">
      <span class="text">Player 2 wins!</span>
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
