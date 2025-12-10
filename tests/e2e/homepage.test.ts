import { expect, test } from "@nuxt/test-utils/playwright"

test.beforeEach(async ({ goto }) => {
  await goto("/", { waitUntil: "domcontentloaded" })
})

test.describe("Home Page", () => {
  test("should display the correct page title", async ({ page }) => {
    // Check the page title
    await expect(page).toHaveTitle(/Starter template/)
  })

  test("should display the correct header", async ({ page }) => {
    // Check the header text
    const header = page.locator("h1")
    await expect(header).toHaveText("Hello world")
  })
})
