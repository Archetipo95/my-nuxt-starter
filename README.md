# Nuxt Starter

Description

- [![Netlify Status](https://api.netlify.com/api/v1/badges/4360c956-7cd2-44f1-aad8-33088c8d3637/deploy-status)](https://app.netlify.com/sites/my-nuxt-experiments/deploys) Site: https://my-nuxt-experiments.netlify.app
- [![Netlify Status](https://api.netlify.com/api/v1/badges/4613b090-beaf-46a6-849d-bee5a39deeb9/deploy-status)](https://app.netlify.com/sites/my-nuxt-starter-storybook/deploys) Storybook : https://my-nuxt-starter-storybook.netlify.app

## Features

1. Nuxt 3
2. TailwindCSS (@nuxtjs/tailwindcss)
3. VueUse (@vueuse/nuxt)
4. Storybook 7
5. Lodash (nuxt-lodash)
6. HeadlessUI (nuxt-headlessui)
7. FormKit (@formkit/nuxt)

## To be added

1. Icons support

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
pnpm storybook-build
```

### Serve locally the production

```bash
pnpm storybook-serve
```

## Deploy on Netlify

### Site

Build command: `pnpm build
`
Publish directory: `dist
`

### Storybook

Build command: `pnpm build && pnpm storybook-build
`
Publish directory: `storybook-static
`
