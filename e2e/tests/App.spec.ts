import { test, expect } from "@playwright/test";

const APP_URL = process.env.APP_URL || "http://localhost:8080";

test("has title", async ({ page }) => {
  await page.goto(APP_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React + TS");
});

test("counter button is visible", async ({ page }) => {
  await page.goto(APP_URL);

  // Expect the counter button to be visible.
  await expect(page.getByRole("button", { name: /count is / })).toBeVisible();
});

test("counter button increments", async ({ page }) => {
  await page.goto(APP_URL);

  // Get the counter button.
  const button = page.getByRole("button", { name: /count is / });

  // Click the counter button.
  await button.click();

  // Expect the counter text to be "1".
  await expect(button).toHaveText("count is 1");
});
