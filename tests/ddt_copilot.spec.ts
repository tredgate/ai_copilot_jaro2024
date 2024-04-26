// import { expect, test } from "@playwright/test";
// import testData from "../data/projectDDT.json";

// // Read the JSON file

// testData.forEach((testData) => {
//   test(`Test for ${testData.Name}`, async ({ page }) => {
//     await page.goto("https://tredgate.com/pmtool");
//     await page.locator("#username").fill("ai_jaro2024");
//     await page.locator("#password").fill("AITredgate24");
//     await page.locator(".btn").click();
//     await page.locator("#Projects > a").click();
//     await page.locator('[test_id="Add Project"]').click();
//     await page.selectOption(
//       '[data-testid="Priority"] select',
//       testData.Priority
//     );
//     await page.selectOption('[data-testid="Status"] select', testData.Status);
//     await page.fill('[data-testid="Name"] input', testData.Name);
//     await expect(page.locator("iframe")).toBeVisible();
//     const frame = await page.frameLocator("iframe");
//     await frame.locator("body").fill(testData.Description);
//     await page.fill('[data-testid="Start Date"] input', testData["Start Date"]);
//     await page.locator('.btn-primary[type="submit"]').click();
//     await expect(page.locator("h3.page-title")).toHaveText("Tasks");
//   });
// });
