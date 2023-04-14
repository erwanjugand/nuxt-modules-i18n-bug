import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      text: "I'm a teapot"
    },
    fr: {
      text: "Je suis une théière"
    }
  }
})

createApp(App).use(i18n).mount('#app')
