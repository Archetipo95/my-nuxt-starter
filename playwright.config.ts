/* eslint-disable node/no-process-env */

import type { ConfigOptions } from "@nuxt/test-utils/playwright"

import { defineConfig, devices } from "@playwright/test"
import { fileURLToPath } from "node:url"

const devicesToTest = [
  "Desktop Chrome",
  "Desktop Safari",
  "Pixel 5",
  "iPhone 12",
] satisfies Array<string | (typeof devices)[string]>
export default defineConfig<ConfigOptions>({
  testDir: "./tests",
  testMatch: "**/tests/e2e/*.test.ts",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  timeout: 120 * 1000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [["html", { outputFolder: "playwright-report" }], ["github"]]
    : [["html", { outputFolder: "playwright-report" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: devicesToTest.map(p =>
    typeof p === "string"
      ? {
          name: p,
          use: devices[p],
        }
      : p,
  ),
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL(".", import.meta.url)),
      host: "http://localhost:3000",
    },
    trace: "on-first-retry",
    ignoreHTTPSErrors: false, // true if the urls start with https
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: "bun dev", // depending on your setup from package manager
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    stdout: !process.env.CI ? "ignore" : "pipe",
    ignoreHTTPSErrors: false, // true if the urls start with https, by default it is false
  },
})
