import type { StorybookConfig } from "@storybook-vue/nuxt"

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
}
export default config
