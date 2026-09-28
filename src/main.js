import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router.js'

import traduction from './locales/localization.js'

createApp(App).use(traduction).use(router).mount('#app')
