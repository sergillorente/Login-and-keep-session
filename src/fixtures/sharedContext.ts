import { test as base, chromium } from '@playwright/test';

const test = base.extend<{ sharedContext: any }>({
  sharedContext: async ({}, use) => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
      storageState: './dev-auth.json',
    });
    await use(context);
    await browser.close();
  },
});

export { test };
