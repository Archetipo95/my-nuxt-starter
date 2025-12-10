import antfu from "@antfu/eslint-config"
import storybook from "eslint-plugin-storybook"
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss"

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

const tailwindConfig = {}

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
    markdown: false,
    ignores: [
      ".pnpm-store/**",
      ".github/**",
      ".nuxt/**",
      "dist/**",
      "public/**",
      "node_modules/**",
      "coverage/**",
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
      "vue/singleline-html-element-content-newline": ["error", {
        ignoreWhenNoAttributes: false,
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea", "code"],
      }],
      "vue/multiline-html-element-content-newline": ["error", {
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea", "code"],
        allowEmptyLines: false,
      }],
      "vue/attributes-order": ["error", {
        alphabetical: true,
      }],
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
      "style/object-curly-newline": ["error", {
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: "never",
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
          consistent: true,
        },
      }],
      "style/function-call-argument-newline": ["error", "consistent"],
      "style/multiline-ternary": "off",
      "style/operator-linebreak": "off",
      "antfu/consistent-list-newline": "off",
      "antfu/top-level-function": "off",
    },
  },
  {
    files: ["**/*.vue", "**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx"],
    plugins: {
      tailwindcss: eslintPluginTailwindCSS,
    },
    settings: {
      tailwindcss: {
        config: tailwindConfig,
      },
    },
    rules: {
      ...eslintPluginTailwindCSS.configs.recommended.rules,
      "tailwindcss/migration-from-tailwind-2": "off",
      "tailwindcss/no-custom-classname": ["warn", {
        cssFiles: ["app/assets/css/main.css"],
        whitelist: [
          "border-accented",
          "stroke-inverted",
          "stroke-inverted/10",
        ],
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
