export default defineNuxtConfig({
  app: {
    head: {
      title: "Martin's Nuxt Starter",
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-lodash'],
  css: ['@/assets/scss/main.scss'],
  tailwindcss: {
    cssPath: '@/assets/scss/main.scss',
    viewer: false,
  },
  // https://nuxt.com/modules/lodash
  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },
})
