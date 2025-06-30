import checker from "vite-plugin-checker"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-01",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/storybook",
    "@nuxt/test-utils/module",
    "nuxt-security",
  ],

  image: {
    // Options
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: ["~/assets/css/main.css"],

  site: {
    url: "https://martin-nuxt-starter.netlify.app",
  },

  ogImage: {
    enabled: false,
  },

  fonts: {
    experimental: {
      processCSSVariables: true, // Enable if using CSS variables for Tailwind CSS v4
    },
  },

  typescript: {
    typeCheck: true,
  },

  vite: {
    plugins: [checker({ vueTsc: true })],
  },
})
