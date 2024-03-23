import '../assets/scss/main.scss'
import { setup } from '@storybook/vue3'
import { plugin, defaultConfig } from '@formkit/vue'
import formkitConfig from '../formkit.config'
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

export const parameters = {
  backgrounds: {
    default: 'Dark',
    values: [
      {
        name: 'Figma Light',
        value: '#E1DFDF',
      },
      {
        name: 'Light',
        value: '#FFF',
      },
      {
        name: 'Dark',
        value: '#333233',
      },
    ],
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
})

setup((app) => {
  app.use(i18n)
  app.use(plugin, defaultConfig(formkitConfig()))
})
