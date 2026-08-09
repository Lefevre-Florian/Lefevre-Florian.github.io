import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import PrototypeView from '../views/PrototypeView.vue'

const router = createRouter({
  history: createWebHashHistory(),

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
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router