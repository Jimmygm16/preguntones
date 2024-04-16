<template>
  <div class="loading-overlay">
    <div class="loader">
      <span class="loader-dot"></span>
      <span class="loader-dot"></span>
      <span class="loader-dot"></span>
    </div>
    <p>Cargando...</p>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent overlay */
  z-index: 9999; /* Ensure overlay is always on top */
}

.loader {
  width: 60px;
  height: 60px;
  border: 4px solid #f3f3f3; /* Adjust border color as needed */
  border-radius: 50%;
  border-top-color: #3498db; /* Adjust animation color as needed */
  animation: spin 1s linear infinite;
}

.loader-spin {
  animation-play-state: running;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-dot {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background-color: #3498db; /* Adjust animation color as needed */
  border-radius: 50%;
  animation: bounce 0.8s ease-in-out infinite alternate;
}

.loader-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loader-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

p {
  color: #fff; /* Adjust text color as needed */
}
</style>
