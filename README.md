# Nuxt Starter

Description

- [![Netlify Status](https://api.netlify.com/api/v1/badges/4360c956-7cd2-44f1-aad8-33088c8d3637/deploy-status)](https://app.netlify.com/sites/my-nuxt-experiments/deploys) Site: https://my-nuxt-experiments.netlify.app
- [![Netlify Status](https://api.netlify.com/api/v1/badges/4613b090-beaf-46a6-849d-bee5a39deeb9/deploy-status)](https://app.netlify.com/sites/my-nuxt-starter-storybook/deploys) Storybook on Netlify: https://my-nuxt-starter-storybook.netlify.app
- [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://main--65f5b391c034b704dd98a557.chromatic.com) Storybook on Chromatic: https://main--65f5b391c034b704dd98a557.chromatic.com

## Features

1. Nuxt 3
2. TailwindCSS (@nuxtjs/tailwindcss)
3. VueUse (@vueuse/nuxt)
4. Storybook 8
5. Lodash (nuxt-lodash)
6. HeadlessUI (nuxt-headlessui)
7. FormKit (@formkit/nuxt)
8. Auto imported svg icons (vite + unplugin-icons)
9. Internationalization (@nuxtjs/i18n)

## To be added

- Testing
- Linting
- Prettier
- Husky
- Commitlint
- Stylelint
- ESLint

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Site

### Start development

(Served on http://localhost:3000)

```bash
pnpm dev
```

### Build production

```bash
pnpm build
```

## Storybook

### Start development

(Served on http://localhost:6006)

```bash
pnpm storybook
```

### Build production

```bash
pnpm build-storybook
```

### Serve locally the production

```bash
pnpm serve-storybook
```

## Deploy on Netlify

### Site

Build command: `pnpm build
`
Publish directory: `dist
`

### Storybook

Build command: `pnpm build && pnpm build-storybook
`
Publish directory: `storybook-static
`
