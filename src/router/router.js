import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import PrototypeView from '../views/PrototypeView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/games/:id',
        component: GameView
    },
    {
        path: '/prototypes/:id',
        component: PrototypeView
    }
  ]
})

export default router