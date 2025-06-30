import antfu from "@antfu/eslint-config"
import storybook from "eslint-plugin-storybook"

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

// TODO: add tailwindcss plugin
// import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'

export default withNuxt(antfu(
  {
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      quotes: "double",
    },
    ignores: [
      ".pnpm-store/**",
      "**/migrations/*",
      "!.storybook",
    ],
  },
  {
    rules: {
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: { max: 2 },
          multiline: { max: 1 },
        },
      ],
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["error", {
        tsconfigRootDir: ".",
      }],
      "unicorn/filename-case": ["error", {
        cases: {
          pascalCase: true,
          kebabCase: true,
          camelCase: true,
        },
        ignore: ["README.md", "FUNDING.yml", "LICENSE"],
      }],
      "object-curly-newline": ["error", {
        ObjectExpression: {
          minProperties: 2,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 2,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: "never",
        ExportDeclaration: {
          minProperties: 2,
          multiline: true,
          consistent: true,
        },
      }],
    },
  },
  // Add the Storybook plugin configuration
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/components/**/*.stories.ts",
    ],
    rules: {
      // 👇 Disable this rule
      "storybook/no-renderer-packages": "off",
    },
  },
),
)
