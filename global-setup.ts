import { FullConfig } from '@playwright/test';
import { loginAndSaveState } from './src/utils/authHelpers';
import fs from 'fs';

async function globalSetup(config: FullConfig) {
  const environment = process.env.ENV || 'dev';
  const storageFilePath = `./${environment}-auth.json`;
  const baseURL = config.projects[0].use?.baseURL || 'https://demoblaze.com/';

  if (!fs.existsSync(storageFilePath)) {
    await loginAndSaveState(storageFilePath, baseURL);
  }
}

export default globalSetup;
