<script setup>
import Result from '@/components/Result.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const players = ref(JSON.parse(localStorage.getItem('characters')))
const router = useRouter()
</script>

<template>
  <main class="result-content">
    <h1 class="text">Game over</h1>
    <Result />
    <button
      @click="
        () => {
          router.push('/')
        }
      "
      class="btn"
    >
      Play again
    </button>
  </main>
</template>

<style scoped>
.result-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  height: 100vh;
  background-color: wheat;
}

.text {
  font-size: 3rem;
  font-weight: 900;
  color: black;
  text-align: center;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background-color: var(--orange);
}
</style>
