import { test, expect, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://support-stage.hitachivantara.com/');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByText('Welcome Log in to continue to').click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('patrick.flanagan@alliedirishbank.mailosaur.net');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#123!');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('button').filter({ hasText: 'My Account' }).first().click();
  await page.getByRole('link', { name: 'My Cases' }).click();
  await page.getByRole('button', { name: 'New Case' }).click();
  await page.getByRole('button', { name: 'Product Support Create a case' }).click();
  await page.getByRole('searchbox', { name: 'Search by product name or' }).fill('vsp');
  await page.getByLabel('02i1J000005OnXZQA0 -').getByText('Virtual Storage Platform (VSP)').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter a brief summary of your' }).click();
  await page.getByRole('textbox', { name: 'Enter a brief summary of your' }).fill('test Hardware case');
  await page.getByRole('textbox', { name: 'Provide details, steps to' }).click();
  await page.getByRole('textbox', { name: 'Provide details, steps to' }).fill('testing creating portal support case creation');
  await page.locator('c-sc-generic-dropdown-field').filter({ hasText: 'Does this issue impact your' }).getByLabel('Please select an option').click();
  await page.getByText('Minimal impact (Non-critical').click();
  await page.locator('c-sc-generic-dropdown-field').filter({ hasText: 'Is your production' }).getByLabel('Please select an option').click();
  await page.locator('div').filter({ hasText: /^Yes$/ }).click();
  await page.getByRole('button', { name: 'Please select an option' }).click();
  await page.getByText('Some', { exact: true }).click();
  await page.getByRole('button', { name: 'Please select an option' }).click();
  await page.getByText('24x7').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Submit' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Submit' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: /^Your Case Number is $/ }).click();
  // Wait for the case number to appear
 /*const locator = page.getByText('Your Case Number is', { exact: false });
 await locator.waitFor();   // wait until it appears

 const caseText = await locator.innerText();
 const caseNumber = caseText.match(/\d+/)?.[0];
 console.log("New Case Number:", caseNumber);

  await page.locator('#main-content').press('ArrowDown');
  await page.locator('#main-content').press('ArrowDown');
  await page.locator('#main-content').press('ArrowUp');
  await page.locator('#main-content').press('ArrowUp');*/

  await page.getByText('View Case Details').click();
});