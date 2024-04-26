# playwrightEmpty

Toto je připravený repozitář pro práci s Playwrightem. Obsahuje základní strukturu a konfiguraci pro spuštění testů.

## Obsah repa

1. Nakonfigurovaný Playwright (TypeScript) projekt
2. tsconfig.json soubor pro konfiguraci TypeScriptu
3. package.json soubor s potřebnými závislostmi
4. Vzorový testovací soubor v adresáři `tests`

### Konfigurace Playwright

Playwright je v tomto repositáři nakonfigurován na:

1. Spuštění testů v prohlížeči Chromium
2. Použití TypeScriptu pro psaní testů
3. Ukládání screenshotů, videí a trace při selhání testu
4. Report HTML automaticky zobrazený při selhání testu

## Požadavky

1. Node.js verze 14 nebo vyšší
2. Windows 10+, Windows Server 2016+
3. MacOS 12 Monterey nebo vyšší
4. Debian 11, Debian 12, Ubuntu 20.04, Ubuntu 22.04
5. Visual Studio Code nebo jiný IDE

## Instalace

Abyste mohli začít používat Playwright v tomto repu, postupujte podle těchto kroků:

1. Naclonujte repo nebo si stáhněte repozitář jako ZIP soubor z GitHubu. Uděláte to kliknutím na tlačítko "Code" a následně "Download ZIP" v sekci "Code".
2. Rozbalte stažený soubor do připravené složky ve vašem počítači.
3. Otevřete repozitář ve Visual Studio Code.
4. Spusťte následující příkaz v terminálu pro instalaci potřebných závislostí:

   ```bash
   npm install
   ```

## Spuštění testů

1. Otevřete terminál ve Visual Studio Code.
2. Spusťte následující příkaz pro spuštění testů:

   ```bash
   npx playwright test
   ```
