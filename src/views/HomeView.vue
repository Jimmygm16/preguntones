<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="main-content">
    <div class="title-container">
      <span class="title">Questioners</span>
    </div>
    <div class="menu">
      <div class="card">Individual</div>
      <RouterLink to="/players">
        <div class="card">Local Coop</div>
      </RouterLink>
      <RouterLink to="/settings">
        <div class="card">Configuration</div>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('src/assets/imgs/Designer.jpeg');
  background-size: cover;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.5rem;
  border-bottom: solid 0.3rem var(--red);
  backdrop-filter: blur(0.4rem);
}

.title {
  color: var(--red);
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
}

.menu {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 1.5rem;
}

.card {
  display: flex;
  border: solid 0.1rem white;
  padding: 1rem;
  justify-content: center;
  width: 20rem;
  background-color: wheat;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgb(0, 0, 0, 0.4);
}

.card:hover {
  cursor: pointer;
  background-color: var(--blue);
}
</style>
