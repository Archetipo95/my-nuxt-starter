export default defineNuxtConfig({
  app: {
    head: {
      title: "Martin's Advent Of Vue 2022",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
      ],
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
