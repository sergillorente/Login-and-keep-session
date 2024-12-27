import { test } from '../src/fixtures/sharedContext';
import { expect } from '@playwright/test';

test('Shared Context Test', async ({ sharedContext }) => {
  const page = await sharedContext.newPage();
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});

test('Login - 2', async ({ sharedContext }) => {
  const page = await sharedContext.newPage();
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Welcome test' })).toBeVisible();
});
