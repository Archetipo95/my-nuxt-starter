# 🚀 Martin's Nuxt Starter

> A modern, full-featured Nuxt 4 starter template with TypeScript, Tailwind CSS, and everything you need to build amazing web applications.

[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220?logo=pnpm)](https://pnpm.io/)
[![CI](https://github.com/archetipo95/my-nuxt-starter/actions/workflows/code-integrity-ci.yaml/badge.svg)](https://github.com/archetipo95/my-nuxt-starter/actions/workflows/code-integrity-ci.yaml)

[🌐 **Live Demo**](https://martin-nuxt-starter.netlify.app) • [📖 **Documentation**](#documentation) • [🚀 **Quick Start**](#quick-start)

---

## ✨ Features

### 🎯 **Core Technologies**

- **🔥 Nuxt 4** - The latest version of the Vue.js framework
- **📘 TypeScript** - Full type safety with vue-tsc
- **🍹 Pinia Colada** - Async state management & data fetching
- **🚀 pnpm** - Fast, disk space efficient package manager
- **🎨 Tailwind CSS v4** - Modern utility-first CSS framework
- **⚡ Vite** - Lightning fast build tool
- **🌍 Internationalization** - i18n support with @nuxtjs/i18n

### 🧩 **UI & Components**

- **🎨 Nuxt UI v4** - Beautiful, accessible components
- **🌙 Color Mode** - Dark/light theme support
- **🖼️ Icons** - Comprehensive icon system (@nuxt/icon)
- **🔤 Fonts** - Web font optimization (@nuxt/fonts)
- **🖼️ Images** - Advanced image optimization (nuxt-image)
- **📱 Modals & Toasts** - Ready-to-use overlay components

### 🔧 **Developer Experience**

- **📋 ESLint v9** - Code linting with @nuxt/eslint & @antfu/eslint-config
- **🔄 VueUse v13** - Essential Vue composition utilities
- **📚 Storybook** - Component development and documentation
- **🧪 Vitest** - Fast unit testing with coverage
- **🎭 Playwright** - End-to-end testing
- **🔒 Security** - Built-in security headers (nuxt-security)

### 🚀 **CI/CD & Quality**

- **📝 Commitlint** - Conventional commit messages
- **🪝 Git Hooks** - Pre-commit validation
- **🔍 Lint Staged** - Lint only changed files
- **⚙️ GitHub Actions** - Automated testing and deployment

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (see `.nvmrc` for version) - Use [NVM](https://github.com/nvm-sh/nvm) for version management
- **pnpm** - Install globally: `npm install -g pnpm`

### Installation

```bash
# Use the correct Node version
nvm use

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command                   | Description                     |
| ------------------------- | ------------------------------- |
| `pnpm dev`                | 🚀 Start development server     |
| `pnpm build`              | 🏗️ Build for production         |
| `pnpm generate`           | 📦 Generate static site         |
| `pnpm preview`            | 👁️ Preview production build     |
| `pnpm test:unit`          | 🧪 Run unit tests               |
| `pnpm test:unit-coverage` | 📊 Run unit tests with coverage |
| `pnpm test:unit-ui`       | 🖥️ Run unit tests with UI       |
| `pnpm test:e2e`           | 🎭 Run E2E tests                |
| `pnpm test:e2e-ui`        | 🖥️ Run E2E tests with UI        |
| `pnpm test:codegen`       | 🎬 Generate E2E tests           |
| `pnpm lint`               | 🔍 Lint code                    |
| `pnpm lint:fix`           | 🔧 Lint and fix code            |
| `pnpm typecheck`          | 📘 Type checking                |

---

## 📁 Project Structure

```
my-nuxt-starter/
├── 📁 app/                    # Main application
│   └── 📁 assets/             # Static assets
│   ├── 📁 components/         # Vue components
│   ├── 📁 composables/        # Vue composables
│   ├── 📁 layouts/            # Layout components
│   ├── 📁 pages/              # Page components
├── 📁 tests/                  # Test files
│   └── 📁 e2e/                # End-to-end tests
├── 📁 server/                 # Server-side code
├── 📁 public/                 # Public static files
└── 📄 nuxt.config.ts          # Nuxt configuration
```

---

## 🍹 Data Fetching (Pinia Colada)

This project uses [Pinia Colada](https://pinia-colada.esm.dev/) for async state management. It provides caching, deduplication, and invalidation out of the box.

### Basic Usage

Use `useQuery` to fetch data:

```vue
<script setup lang="ts">
const { state, asyncStatus } = useQuery({
  key: ['products'],
  query: () => fetch('/api/products').then(r => r.json())
})
</script>

<template>
  <div v-if="asyncStatus === 'loading'">Loading...</div>
  <div v-else-if="state.error">Error: {{ state.error }}</div>
  <div v-else>
    {{ state.data }}
  </div>
</template>
```

### Mutations

Use `useMutation` to modify data:

```vue
<script setup lang="ts">
const { mutate } = useMutation({
  mutation: (newProduct) => fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify(newProduct)
  })
})
</script>
```

For more details, check the [Pinia Colada documentation](https://pinia-colada.esm.dev/).

---

## 💻 Development

### Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>: <description>

Types: feat, fix, docs, style, refactor, test, chore, ci, build, perf, revert
```

**Examples:**

- `feat: add user authentication`
- `fix: resolve navbar responsive issue`
- `docs: update installation guide`

### Unit Test

```bash
# Run unit tests
pnpm test:unit

# Run unit tests with coverage
pnpm test:unit-coverage

# Run unit tests with ui
pnpm test:unit-ui
```

### E2E Test

```bash
# Install Playwright browsers (required for E2E tests)
pnpm exec playwright install

# Run E2E tests
pnpm test:e2e

# Run E2E tests with ui
pnpm test:e2e-ui

# Run codegen for E2E tests
pnpm test:codegen
```

### 🤖 Testing GitHub Actions Locally

## We suggest using [act](https://github.com/nektos/act) to try GitHub Actions locally before pushing to GitHub. This allows you to validate your workflows and save time by running them in a local containerized environment.

## 📋 Roadmap

### 🔄 In Progress

- [ ] **🎨 Custom Icon Library** - Project-specific icons
- [ ] **📊 Coverage GitHub Action** - Automated coverage reports

### 🎯 Planned Features

- [ ] **🔍 Zod** - Runtime type validation
- [ ] **🎨 Chromatic** - Visual testing
- [ ] **🚦 Lighthouse** - Performance monitoring

---

## 🛠️ Troubleshooting

Having issues? Try these steps:

1. **🧹 Clean the project**: `pnpm clean-project`
2. **📋 Check Node version**: Ensure you're using the version specified in `.nvmrc`
3. **📦 Check pnpm version**: Verify it matches the version in `package.json`
4. **🔄 Reinstall dependencies**: `rm -rf node_modules && pnpm install`
5. **🔧 Check environment**: Ensure all required environment variables are set

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

Built with ❤️ using amazing open-source projects:

- [Nuxt](https://nuxt.com/)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)

---

## ⚠️ Tailwind CSS Linting (Beta)

Please note that ESLint support for Tailwind CSS is currently in beta due to the ongoing development of Tailwind CSS v4. If you encounter any issues or false positives, you can disable this feature by modifying the `eslint.config.mjs` file or temporarily disabling the specific rules.

---

<div align="center">
  <strong>🌟 Star this repository if you find it helpful!</strong>
</div>
