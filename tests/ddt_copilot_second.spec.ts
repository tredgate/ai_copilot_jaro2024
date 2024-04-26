// ! Kroky pro vytvoření nového DDT testu s Copilotem
// * 1. Vytvoření nového souboru s testem - hotovo (tento soubor)
// * 2. Vytvoříme JSON jako zdroj dat pro test - hotovo: data/new_project_ddt.json
// * 3. Vytvoříme funkci, která převede hodnotu z JSON: StartDate (today, tomorrow, yesterday) na aktuální datum ve formátu YYYY-MM-DD pomocí date-fns - hotovo
// * 4. Vytvoříme základní strukturu Playwright DDT testu - import JSON do souboru, forEach cyklus, dynamické názvy testů (počet podle počtu dat v JSON) - hotovo
// * 5. Vytvoříme beforeEach hook, který se bude přihlašovat a otevírat stránku Projects a formulář pro přidání nového projektu - hotovo
// * 6. Vytvoření kroků testu - vyplnění formuláře, odeslání formuláře, ověření, že se zobrazí stránka s úkoly - hotovo
// ! Kroky testu
// * 1. Otevřít PMTool - hotovo
// * 2. Přihlásit se - hotovo
// * 3. Otevřít stránku Projects - hotovo
// * 4. Otevřít formulář pro přidání nového projektu - hotovo
// * 5. Vyplnit formulář daty z JSON - hotovo
// * 6. Odeslat formulář - hotovo
// * 7. Ověřit, že se zobrazí stránka s úkoly - hotovo
// BONUS: ověřit uložená data na stránce ProjectInfo v detailu projektu

import { format, addDays, subDays } from "date-fns";
import { test, expect } from "@playwright/test";
import jsonData from "../data/new_project_ddt.json";

function getActualDate(value: string): string {
  let date = new Date();

  switch (value) {
    case "tomorrow":
      date = addDays(date, 1);
      break;
    case "yesterday":
      date = subDays(date, 1);
      break;
    case "today":
      break;
    default:
      throw new Error("Invalid value for date");
  }

  return format(date, "yyyy-MM-dd");
}

test.describe("DDT test with Copilot", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool");
    await page.locator("#username").fill("ai_jaro2024");
    await page.locator("#password").fill("AITredgate24");
    await page.locator(".btn").click();
    await page.locator("#Projects a").click();
    await page.locator('[test_id="Add Project"]').click();
  });

  jsonData.forEach((data) => {
    test(`Create new DDT project: ${data.TestName}`, async ({ page }) => {
      await page.selectOption('[data-testid="Priority"] select', data.Priority);
      await page.selectOption('[data-testid="Status"] select', data.Status);
      await page.fill('[data-testid="Name"] input', data.Name);
      // ! Toto nebude fungovat, protože je prvek Description v iframe
      //await page.fill('[data-testid="Description"] textarea', data.Description);
      // Musíme použít page.frame se selektorem: iframe.cke_wysiwyg_frame
      const frame = page.frameLocator("iframe.cke_wysiwyg_frame");
      // Použijeme fill na frame
      await frame.locator("body").fill(data.Description);
      const actualStartDate = getActualDate(data.StartDate);
      await page.fill('[data-testid="Start Date"] input', actualStartDate);

      // Submit the form
      await page.click("button[type='submit']");
      await expect(page.locator(".page-title")).toHaveText("Tasks");
    });
  });
});
