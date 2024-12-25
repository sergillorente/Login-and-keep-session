import { test, expect } from '@playwright/test';

test('Login - 2', async ({ page, context }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible();
});
