import { test, expect } from '@playwright/test';

test('Fail Login - No reusable cookies used', async ({ page, context }) => {
  await context.clearCookies();
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible();
});

test.use({ storageState: './NoAuth.json' });
test('Fail Login - Using state of stateless json', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible();
});
