import { createI18n } from "vue-i18n"

import en from "./en.json"
import fr from "./fr.json"

const browserLocale = navigator.language.split('-')[0];
const locale = ['fr', 'en'].includes(browserLocale) ? browserLocale : 'en';

const traduction = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: { en, fr },
  warnHtmlMessage : false
})

export default traduction