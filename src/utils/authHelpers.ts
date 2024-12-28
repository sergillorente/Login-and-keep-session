import { chromium, BrowserContext } from '@playwright/test';

export async function loginAndSaveState(
  storageFilePath: string,
  baseURL: string
) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(baseURL);
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('test');
  await page.locator('#loginpassword').fill('test');
  await page.locator('[onclick="logIn()"]').click();
  await page.waitForSelector('#logout2', { timeout: 30000 });

  await context.storageState({ path: storageFilePath });
  await browser.close();
}

export async function createAuthenticatedContext(
  storageStatePath: string
): Promise<BrowserContext> {
  const browser = await chromium.launch();
  return await browser.newContext({ storageState: storageStatePath });
}
