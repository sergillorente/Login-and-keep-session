import { chromium, FullConfig } from '@playwright/test';
import fs from 'fs';

async function globalSetup(config: FullConfig) {
  const storageFilePath = './dev-auth.json';

  if (!fs.existsSync(storageFilePath)) {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const baseURL = config.projects[0].use?.baseURL || 'https://demoblaze.com/';
    await page.goto(baseURL);
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginpassword').fill('test');
    await page.locator('[onclick="logIn()"]').click();
    await page.waitForSelector('#logout2', { timeout: 30000 });

    await context.storageState({ path: storageFilePath });
    await browser.close();
  }
}

export default globalSetup;
