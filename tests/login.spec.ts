import { test, expect } from '@playwright/test';

test('Hitachi Support Portal Login with MFA Skip', async ({ page }) => {

  // 1. Navigate to portal
  await page.goto('https://support-stage.hitachivantara.com/');

  // 2. Click "Log In"
  await page.getByRole('link', { name: 'Log In' }).click();

  // 3. Enter Email Address
  await page.getByLabel('Email address').fill('patrick.flanagan@alliedirishbank.mailosaur.net');

  // 4. Click Continue
  await page.getByText('Continue', { exact: true }).click();

  // 5. Enter Password
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#123!');

  // 6. Click Continue
  await page.getByRole('button', { name: 'Continue' }).click();

  // 7. Skip MFA Setup
  //await page.getByRole('button', { name: 'Skip MFA Setup' }).click();

  // 8. Confirm Skip
  //await page.getByRole('button', { name: 'Yes, I want to skip MFA' }).click();

  // 9. Assert login success (adjust selector as needed)
  await expect(page.getByText('Welcome')).toBeVisible();
  
});