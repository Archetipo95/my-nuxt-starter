# Contributing to Martin's Nuxt Starter

Thank you for your interest in contributing to Martin's Nuxt Starter! We welcome contributions from the community and are pleased that you want to help make this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Code Style](#code-style)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

---

## Code of Conduct

By participating in this project, you are expected to uphold our standards of respectful and constructive communication. Please be kind and courteous to others.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version specified in `.nvmrc`) - We recommend using [NVM](https://github.com/nvm-sh/nvm) for version management
- **pnpm** (version 10.24.0 or higher) - See [pnpm installation guide](https://pnpm.io/installation)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-nuxt-starter.git
   cd my-nuxt-starter
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/Archetipo95/my-nuxt-starter.git
   ```

---

## Development Setup

1. **Use the correct Node version:**
   ```bash
   nvm use
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

The application should now be running at `http://localhost:3000`.

### For E2E Testing Setup

If you plan to work on or run E2E tests, install Playwright browsers:

```bash
pnpm exec playwright install
```

---

## Development Workflow

1. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following our [code style guidelines](#code-style)

3. **Test your changes** using appropriate testing commands

4. **Commit your changes** following our [commit guidelines](#commit-guidelines)

5. **Push to your fork:**
   ```bash
   git push origin feat/your-feature-name
   ```

6. **Open a Pull Request** from your fork to our main repository

---

## Commit Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. All commits must be formatted as follows:

```
<type>: <description>

[optional body]

[optional footer]
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies
- **perf**: A code change that improves performance
- **revert**: Reverts a previous commit

### Examples

```bash
feat: add user authentication
fix: resolve navbar responsive issue
docs: update installation guide
style: format code with prettier
refactor: simplify data fetching logic
test: add unit tests for authentication
chore: update dependencies
```

### Git Hooks

This project uses Git hooks to enforce code quality:

- **pre-commit**: Runs linting and type checking on staged files
- **commit-msg**: Validates commit message format

These hooks are automatically installed when you run `pnpm install`.

---

## Code Style

### General Guidelines

- Write clear, readable, and maintainable code
- Follow existing code patterns and conventions in the project
- Add comments for complex logic, but prefer self-documenting code
- Keep functions small and focused on a single responsibility

### TypeScript

- Use TypeScript for all new code
- Provide proper type annotations
- Avoid using `any` type unless absolutely necessary
- Leverage type inference when possible

### Vue Components

- Use the Composition API with `<script setup>` syntax
- Keep components focused and reusable
- Use proper prop typing with TypeScript
- Follow Vue.js style guide recommendations

### Linting

This project uses ESLint v9 with:
- `@nuxt/eslint`
- `@antfu/eslint-config`
- `eslint-plugin-tailwindcss` (beta)

**Run linting:**
```bash
pnpm lint
```

**Auto-fix linting issues:**
```bash
pnpm lint:fix
```

### Type Checking

Ensure your code passes type checking:

```bash
pnpm typecheck
```

### Tailwind CSS

- Use Tailwind CSS v4 utility classes
- Follow mobile-first responsive design
- Note: ESLint support for Tailwind CSS is in beta; some false positives may occur

---

## Testing

We maintain high code quality through comprehensive testing.

### Unit Tests

We use **Vitest** for unit testing.

**Run unit tests:**
```bash
pnpm test:unit
```

**Run with coverage:**
```bash
pnpm test:unit-coverage
```

**Run with UI:**
```bash
pnpm test:unit-ui
```

### E2E Tests

We use **Playwright** for end-to-end testing.

**Run E2E tests:**
```bash
pnpm test:e2e
```

**Run with UI:**
```bash
pnpm test:e2e-ui
```

**Generate new E2E tests:**
```bash
pnpm test:codegen
```

### Writing Tests

- Write tests for all new features
- Update tests when modifying existing features
- Ensure tests are clear and maintainable
- Follow existing test patterns in the project
- Aim for meaningful test coverage, not just high percentages

---

## Pull Request Process

1. **Update documentation** if you've made changes that require it

2. **Ensure all tests pass:**
   ```bash
   pnpm test:unit
   pnpm test:e2e
   ```

3. **Verify code quality:**
   ```bash
   pnpm lint
   pnpm typecheck
   ```

4. **Update the README.md** if you've added features or changed functionality

5. **Create a Pull Request** with a clear title and description:
   - Use conventional commit format for the PR title
   - Describe what changes you've made and why
   - Reference any related issues (e.g., "Closes #123")
   - Include screenshots for UI changes

6. **Respond to feedback** from maintainers:
   - Address review comments promptly
   - Make requested changes in new commits
   - Keep the conversation constructive and professional

7. **Squash commits** if requested before merging

### PR Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's code style
- [ ] All tests pass
- [ ] Linting passes without errors
- [ ] Type checking passes
- [ ] Commit messages follow conventional commits
- [ ] Documentation is updated (if needed)
- [ ] Changes are covered by tests
- [ ] No unnecessary files are included in commits

---

## Project Structure

Understanding the project structure will help you navigate and contribute:

```
my-nuxt-starter/
├── 📁 app/                    # Main application
│   ├── 📁 assets/             # Static assets (CSS, images)
│   ├── 📁 components/         # Vue components
│   ├── 📁 composables/        # Vue composables (reusable logic)
│   ├── 📁 layouts/            # Layout components
│   └── 📁 pages/              # Page components (auto-routing)
├── 📁 tests/                  # Test files
│   └── 📁 e2e/                # End-to-end tests
├── 📁 public/                 # Public static files
├── 📁 i18n/                   # Internationalization files
├── 📁 .storybook/             # Storybook configuration
└── 📄 nuxt.config.ts          # Nuxt configuration
```

### Key Technologies

- **Nuxt 4** - The Vue.js framework
- **TypeScript** - Type safety
- **🍹 Pinia Colada** - Async state management & data fetching
- **Tailwind CSS v4** - Utility-first CSS
- **Nuxt UI v4** - Component library
- **Vite** - Build tool
- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **Storybook** - Component development

---

## Troubleshooting

### Common Issues

**Dependencies not installing correctly:**
```bash
pnpm clean-project
pnpm install
```

**Node version mismatch:**
```bash
nvm use
```

**Tests failing:**
```bash
# For E2E tests, ensure Playwright browsers are installed
pnpm exec playwright install
```

**Linting errors:**
```bash
pnpm lint:fix
```

**Type checking errors:**
```bash
pnpm typecheck
```

### Testing GitHub Actions Locally

We recommend using [act](https://github.com/nektos/act) to test GitHub Actions workflows locally before pushing:

```bash
# Install act
brew install act  # macOS
# or follow instructions at https://github.com/nektos/act

# Run workflows locally
act
```

---

## Need Help?

If you have questions or need help:

1. Check existing [issues](https://github.com/Archetipo95/my-nuxt-starter/issues) to see if your question has been answered
2. Review the [README.md](README.md) for project documentation
3. Open a new issue with the `question` label

---

## Recognition

Contributors will be recognized in our project. Thank you for helping make this project better! 🎉

---

## License

By contributing to Martin's Nuxt Starter, you agree that your contributions will be licensed under the [MIT License](LICENSE).
