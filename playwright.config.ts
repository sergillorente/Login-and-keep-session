import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const environment = process.env.ENV || 'dev';

export default defineConfig({
  globalSetup: './global-setup', // comment it to use the {environment}-auth.json file instead of calling for every test the global-setp.ts file
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : '100%',
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    // storageState: `{environment}-auth.json`, // this can be defined exclusively in the projects array, so every project is login with specific cookies of that env
    storageState: `./${environment}-auth.json`,
    baseURL: 'https://demoblaze.com/',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
