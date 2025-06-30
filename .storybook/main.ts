import type { StorybookConfig } from "@storybook-vue/nuxt"

import { mergeConfig } from "vite"

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.ts",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@vueless/storybook-dark-mode",
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
        },
      },
    })
  },
}
export default config
