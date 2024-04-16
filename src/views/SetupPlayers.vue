<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const character1 = ref('')
const img1 = ref('')
const img2 = ref('')
const character2 = ref('')

const changeAvatar = (character, name) => {
  const url = 'https://robohash.org/' + name + '?set=set4'
  if (character == 1) {
    img1.value = url
  } else {
    img2.value = url
  }
}

const send_characters = () => {
  if (
    /\S/.test(character1.value) &&
    /\S/.test(character2.value) &&
    character1.value != character2.value
  ) {
    const charactersInfo = [
      {
        character1: character1.value,
        url_img1: img1.value
      },
      {
        character2: character2.value,
        url_img2: img2.value
      }
    ]
    localStorage.setItem('characters', JSON.stringify(charactersInfo))
    console.log('created')
    router.push('/game')
  } else {
    alert('names cannot be empty or same')
  }
}
</script>

<template>
  <main class="main-content">
    <RouterLink to="/">
      <div class="back-container">
        <img class="back-icon" src="../assets/imgs/back.png" alt="back-forward" />
      </div>
    </RouterLink>
    <div class="title-container">
      <span class="title">character creation</span>
    </div>
    <section class="principal-content">
      <div class="characters-container">
        <div class="character-card">
          <span class="character-text">Character 1</span>
          <img
            class="avatar"
            v-if="character1 == ''"
            src="https://robohash.org/default?set=set4"
            alt="img-default"
          />
          <img v-else class="avatar" :src="img1" alt="character1" />
          <input
            @input="changeAvatar(1, character1)"
            v-model="character1"
            class="input-name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="character-card">
          <span class="character-text">Character 2</span>
          <img
            class="avatar"
            v-if="character2 == ''"
            src="https://robohash.org/default?set=set4"
            alt="img-default"
          />
          <img v-else class="avatar" :src="img2" alt="character2" />
          <input
            @input="changeAvatar(2, character2)"
            v-model="character2"
            class="input-name"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <div class="button-container">
        <button @click="send_characters" class="btn">Accept</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  width: 100%;
  height: 100vh;
}
.principal-content {
  padding: 0rem 4rem;
}
.title {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--yellow);
  border-bottom: solid 0.3rem var(--yellow);
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
}

.characters-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.character-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  gap: 2rem;
  padding: 2rem;
  background-color: rgb(164, 7, 226);
}

.input-name {
  padding: 0.5rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
}

.input-name:focus {
  outline: none;
}

.avatar {
  width: 96px;
  height: 96px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.btn {
  padding: 1rem 2rem;
  width: 13rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--yellow);
}

.btn:hover {
  cursor: pointer;
  background-color: var(--orange);
}

.character-text {
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
}

.back-icon {
  width: 4rem;
  height: 4rem;
  padding-left: 2rem;
  transition: 0.5s;
}

.back-icon:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
