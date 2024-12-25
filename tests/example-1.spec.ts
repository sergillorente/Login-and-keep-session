import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible();
});

test('Login - 2', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('#logout2')).toBeVisible();
});
