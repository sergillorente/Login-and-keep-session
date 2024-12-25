import { Browser, chromium, Page, expect } from '@playwright/test';

async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto('https://demoblaze.com/');
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('test');
  await page.locator('#loginpassword').fill('test');
  await page.locator('[onclick="logIn()"]').click();
  await expect(page.locator('#logout2')).toBeVisible({ timeout: 30000 });

  // save the satte of the webpage
  await page.context().storageState({ path: './LoginAuth.json' });

  await browser.close();
}

export default globalSetup;
