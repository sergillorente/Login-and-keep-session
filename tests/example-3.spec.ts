import { test, expect } from '@playwright/test';

test('Fail Login - No reusable cookies used', async ({ page, context }) => {
  await context.clearCookies();
  await page.goto('/');
  await expect(page.locator('#logout2')).not.toBeVisible();
});

test.use({ storageState: './NoAuth.json' });
test('Fail Login - Using state of stateless json', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#logout2')).not.toBeVisible();
});
