export default defineNuxtConfig({
  app: {
    head: {
      title: "Martin's Nuxt Starter",
    },
  },

  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-lodash', 'nuxt-headlessui'],
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

  devtools: {
    enabled: true,
  },

  formkit: {
    autoImport: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
