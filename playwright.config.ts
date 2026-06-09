import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  timeout : 60 * 1000,   //30000 ms(30 secs)
  expect : { timeout : 30 * 1000 },
  fullyParallel: true,
  //retries: process.env.CI ? 2 : 0,
  retries:1,
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
  //const config = {
  //reporter: [['line'], ['allure-playwright']],
//},
//export default config;

  reporter: [
    ['html',{open: 'always'}],
    ['dot'],
    ['list'],
  ],

  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    viewport: { width: 1280, height: 600}, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if nhttps://support-stage.hitachivantara.com/ecessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests

    baseURL: ''

  },

  //grep: /@master/,

  projects: [
   {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    } */
  ],


});
