const VueTypeImports = require("vite-plugin-vue-type-imports");
const { mergeConfig } = require("vite");
const AutoImport = require("unplugin-auto-import/vite");

const stories = ["../components/**/*.stories.@(js|jsx|ts|tsx)"];

const framework = {
  name: "@storybook/vue3-vite",
};

const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/addon-mdx-gfm",
  "@storybook/addon-styling",
];

const imports = ["vue", "@vueuse/core"];
module.exports = {
  stories,
  framework,
  addons,
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        dedupe: ["@storybook/client-api"],
      },
      plugins: [
        VueTypeImports["default"](),
        AutoImport({
          imports,
        }),
      ],
    });
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
};
