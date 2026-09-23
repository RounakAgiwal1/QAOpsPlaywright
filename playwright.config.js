// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'node:cluster';
import { TIMEOUT } from 'node:dns';
import { report } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  //testDir: './tests/Practice',
  timeout: 30 * 1000,
  expect:
  {
    timeout: 30 * 1000,
  },
  reporter: [['html', { open: 'always' }]],
  use: {

    BrowserName: 'chromium',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,

  },

});

module.exports = config
