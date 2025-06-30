import type { StorybookConfig } from "@storybook-vue/nuxt"

// import { join } from "node:path"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.ts",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@vueless/storybook-dark-mode",
    // TODO: enable tests
    // "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: "vue/dist/vue.esm-bundler.js",
          // "@root": join(__dirname, "../"),
        },
      },
    })
  },
}
export default config
