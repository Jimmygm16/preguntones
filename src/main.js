import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
