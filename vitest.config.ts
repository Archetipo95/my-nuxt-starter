import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    name: "unit",
    globals: true,
    environment: "nuxt",
    include: ["**/components/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["**/components/**/*.vue"],
    },
  },
})
