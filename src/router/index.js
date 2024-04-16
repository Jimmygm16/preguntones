import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SetupPlayers from '@/views/SetupPlayers.vue'
import Game from '@/views/Game.vue'
import TempView from '@/views/TempView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/players',
      name: 'players-setup',
      component: SetupPlayers
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/settings',
      name: 'settings',
      component: TempView
    }
  ]
})

export default router
