import { test as base } from '@playwright/test';
import { createAuthenticatedContext } from '../utils/authHelpers';

const test = base.extend<{ sharedContext: any }>({
  sharedContext: async ({}, use) => {
    const environment = process.env.ENV || 'dev';
    const storageStatePath = `./${environment}-auth.json`;
    const context = await createAuthenticatedContext(storageStatePath);
    await use(context);
    await context.browser()?.close();
  },
});

export { test };
