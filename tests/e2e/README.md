# End-to-End Testing

This project uses [Playwright](https://playwright.dev/) for End-to-End (E2E) testing.

## 🚀 Getting Started

### 1. Install Browsers

Before running tests, ensure Playwright browsers are installed:

```bash
pnpm exec playwright install
```

### 2. Run Tests

Run all tests:

```bash
pnpm test:e2e
```

Run with UI mode (interactive):

```bash
pnpm test:e2e-ui
```

Run for a specific browser (e.g., Safari):

```bash
pnpm exec playwright test --project="Desktop Safari"
```

## 📝 Writing Tests

- **Location**: `tests/e2e/*.test.ts`
- **Framework**: `@nuxt/test-utils/playwright`

### Example

```ts
import { expect, test } from "@nuxt/test-utils/playwright"

test("homepage has correct title", async ({
  page,
  goto
}) => {
  await goto("/", { waitUntil: "domcontentloaded" })
  await expect(page).toHaveTitle(/My App/)
})
```

## ⚠️ Important Notes

### Safari / WebKit Support

If you encounter issues with Safari (WebKit) hanging or failing:

1. Ensure `waitUntil: "domcontentloaded"` is used in `page.goto()`.
2. `nuxt-security` headers are relaxed in development mode to allow `localhost` testing on WebKit.

To fix the last problem you can modify `nuxt.config.ts` as follows:

```ts
security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
      contentSecurityPolicy: process.env.NODE_ENV === "development"
        ? false
        : {
          "img-src": ["'self'", "data:", "https:"],
          "script-src": ["'self'", "https:", "'unsafe-inline'"],
        },
    },
  },
```
