const VueTypeImports = require("vite-plugin-vue-type-imports");
const { mergeConfig } = require("vite");
const AutoImport = require("unplugin-auto-import/vite");

const stories = [
  "../stories/**/*.stories.mdx",
  "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  "../components/**/*.stories.@(js|jsx|ts|tsx)",
];

const framework = "@storybook/vue3";

const addons = [
  "@storybook/addon-essentials",
  {
    name: "@storybook/addon-postcss",
    options: {
      cssLoaderOptions: {
        importLoaders: 1,
      },
      postcssLoaderOptions: {
        implementation: require("postcss"),
      },
    },
  },
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
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
};
