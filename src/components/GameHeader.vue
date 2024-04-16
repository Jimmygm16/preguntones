<script setup>
import { ref } from 'vue'

const info = ref(JSON.parse(localStorage.getItem('characters')))
console.log(info.value[0].url_img1)
</script>

<template>
  <div class="header-container">
    <div class="character-info">
      <img class="avatar" :src="info[0].url_img1" alt="character1" />
      <div class="game-info">
        <span>{{ info[0].character1 }}</span>
        <span>Puntos 10</span>
      </div>
    </div>
    <div class="text-container">
      <span class="text">Questioners!</span>
    </div>
    <div class="character-info">
      <div class="game-info">
        <span>{{ info[1].character2 }}</span>
        <span>Puntos 10</span>
      </div>
      <img class="avatar" :src="info[1].url_img2" alt="character1" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgb(0, 0, 0, 0.2);
  background-color: var(--blue);
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.game-info {
  display: flex;
  flex-direction: column;
}

.text {
  font-weight: 900;
  font-size: 1.5rem;
}

.avatar {
  width: 3rem;
  height: 3rem;
}
</style>
