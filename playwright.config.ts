import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
//   globalSetup: './global-setup', // comment it to use the LoginAuth.json file instead of calling for every test the global-setp.ts file
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    // storageState: './LoginAuth.json', // this can be defined exclusively in the projects array, so every project is login with specific cookies of that env
  storageState: "./auth.json"
},

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
