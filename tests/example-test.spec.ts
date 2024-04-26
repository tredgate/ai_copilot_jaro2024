import { expect, test } from "@playwright/test";

test("Open Tredgate PMTool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator(".form-title")).toBeVisible();
});
