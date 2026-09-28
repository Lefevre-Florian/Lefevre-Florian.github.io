import { createRouter, createWebHashHistory } from 'vue-router'

import traduction from '../locales/localization.js'

import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import PrototypeView from '../views/PrototypeView.vue'

const language = ["en", "fr"]

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
        path: '/:locale',
        component: HomeView
    },
    {
        path: '/:locale/games/:id',
        name : "games",
        component: GameView
    },
    {
        path: '/:locale/prototypes/:id',
        name : "prototypes",
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

router.beforeEach((to) => {
  const locale = to.params.locale

  if (!language.includes(locale)) {
    return `/${traduction.global.locale.value}`
  }

  traduction.global.locale.value = locale
})

export default router