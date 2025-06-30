import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/storybook",
    "@nuxt/test-utils/module",
    "nuxt-security",
  ],

  css: ["~/assets/css/main.css"],

  image: {
    // Options
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  storybook: {
    // Turned off for now, as it's not working with Nuxt
    // You can launch it manually with `bun storybook`
    enabled: false,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  typescript: {
    typeCheck: true,
  },
})
