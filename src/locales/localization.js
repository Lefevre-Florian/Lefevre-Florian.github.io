import { createI18n } from "vue-i18n"

import en from "./en.json"
import fr from "./fr.json"

const traduction = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: { en, fr }
})

export default traduction