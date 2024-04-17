<script setup>
const props = defineProps({
  info: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="header-container">
    <div class="character-info">
      <img class="avatar" :src="info[0].url_img1" alt="character1" />
      <div class="hearts-container">
        <img
          v-for="i in info[0].lives"
          v-bind:key="i"
          class="heart"
          src="../assets/imgs/hearth.svg"
          alt="heart"
          :fill="'#FF0000'"
        />
      </div>
      <div class="game-info">
        <span>{{ info[0].character1 }}</span>
        <span>Score: {{ info[0].score }}</span>
      </div>
    </div>

    <div class="text-container">
      <span class="text">Questioners!</span>
    </div>

    <div class="character-info">
      <img class="avatar" :src="info[1].url_img2" alt="character1" />
      <div class="hearts-container">
        <img
          v-for="i in info[1].lives"
          v-bind:key="i"
          class="heart"
          src="../assets/imgs/hearth.svg"
          alt="heart"
          :fill="'#FF0000'"
        />
      </div>
      <div class="game-info">
        <span>{{ info[1].character2 }}</span>
        <span>Score: {{ info[1].score }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgb(0, 0, 0, 0.2);
  background-color: var(--blue);
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-info {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 0rem 2rem;
}

.game-info {
  display: flex;
  flex-direction: column;
}

.hearts-container {
  display: flex;
}

.text {
  font-weight: 900;
  font-size: 1.5rem;
}

.avatar {
  width: 3rem;
  height: 3rem;
}

.heart {
  fill: red;
}
</style>
