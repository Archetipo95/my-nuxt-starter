export default defineNuxtConfig({
  app: {
    head: {
      title: "Martin's Nuxt Starter",
    },
  },
  css: ["@/assets/scss/main.scss"],
  tailwindcss: {
    cssPath: "@/assets/scss/main.scss",
    viewer: false,
  },
  modules: [
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
});
