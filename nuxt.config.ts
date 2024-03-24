import Components from 'unplugin-vue-components/vite'
import { resolveIcons, mapIcons } from './utils/iconSetting'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Martin's Nuxt Starter",
    },
  },
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'nuxt-headlessui',
    '@nuxtjs/i18n',
    "@nuxt/fonts"
  ],
  css: ['@/assets/scss/main.scss'],
  tailwindcss: {
    cssPath: '@/assets/scss/main.scss',
    viewer: false,
  },
  /**
   * Nuxt Lodash config
   * @see https://nuxt.com/modules/lodash
   */
  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },
  /**
   * Nuxt Headless UI config
   * @see https://nuxt.com/modules/headlessui
   */
  headlessui: {
    prefix: 'Headless',
  },
  /**
   * Formkit config
   * @see https://formkit.com
   */
  formkit: {
    autoImport: true,
  },
  /**
   * VueUse config
   * @see https://i18n.nuxtjs.org/
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  vite: {
    plugins: [
      Components({
        resolvers: [resolveIcons()],
        dts: true,
      }),
      mapIcons(),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})