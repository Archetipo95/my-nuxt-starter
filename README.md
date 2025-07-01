# 🚀 Martin's Nuxt Starter

> A modern, full-featured Nuxt 4 starter template with TypeScript, Tailwind CSS, and everything you need to build amazing web applications.

[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.2.13-000000?logo=bun)](https://bun.sh/)

[🌐 **Live Demo**](https://martin-nuxt-starter.netlify.app) • [📖 **Documentation**](#documentation) • [🚀 **Quick Start**](#quick-start)

---

## ✨ Features

### 🎯 **Core Technologies**

- **🔥 Nuxt 4** - The latest version of the Vue.js framework
- **📘 TypeScript** - Full type safety with vue-tsc
- **🚀 Bun** - Ultra fast package manager and runtime
- **🎨 Tailwind CSS v4** - Modern utility-first CSS framework
- **⚡ Vite** - Lightning fast build tool

### 🧩 **UI & Components**

- **🎨 Nuxt UI v3** - Beautiful, accessible components
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
- **Bun** - Install globally: `npm install -g bun`

### Installation

```bash
# Use the correct Node version
nvm use

# Install dependencies
bun install

# Start development server
bun dev
```

### Available Scripts

| Command             | Description                 |
| ------------------- | --------------------------- |
| `bun dev`           | 🚀 Start development server |
| `bun build`         | 🏗️ Build for production     |
| `bun storybook`     | 📚 Run Storybook            |
| `bun test`          | 🧪 Run unit tests           |
| `bun test:e2e`      | 🎭 Run E2E tests            |
| `bun lint`          | 🔍 Lint code                |
| `bun typecheck`     | 📘 Type checking            |
| `bun clean-project` | 🧹 Clean project cache      |

---

## 📁 Project Structure

```
nucleus/
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

### Testing

```bash
# Run unit tests
bun test

# Run unit tests with coverage
bun test --coverage

# Run E2E tests
bun test:e2e
```

---

## 📋 Roadmap

### 🔄 In Progress

- [ ] **🌍 Internationalization (i18n)** - Multi-language support
- [ ] **🎨 Custom Icon Library** - Project-specific icons
- [ ] **📊 Coverage GitHub Action** - Automated coverage reports

### 🎯 Planned Features

- [ ] **🔍 Zod** - Runtime type validation
- [ ] **🗂️ Pinia** - State management
- [ ] **🎨 Chromatic** - Visual testing
- [ ] **🚦 Lighthouse** - Performance monitoring

---

## 🛠️ Troubleshooting

Having issues? Try these steps:

1. **🧹 Clean the project**: `bun clean-project`
2. **📋 Check Node version**: Ensure you're using the version specified in `.nvmrc`
3. **📦 Check Bun version**: Verify it matches the version in `package.json`
4. **🔄 Reinstall dependencies**: `rm -rf node_modules && bun install`
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
- [Bun](https://bun.sh/)

---

<div align="center">
  <strong>🌟 Star this repository if you find it helpful!</strong>
</div>
