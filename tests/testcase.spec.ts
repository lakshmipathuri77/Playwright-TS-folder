import { test, expect, Locator } from '@playwright/test';
 
 
 
test('test', async ({ page }) => {
 
 await page.goto('https://support-stage.com/');
 
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
 
 //await page.getByRole('button', { name: 'Product Support Create a case' }).click();
 const createCaseButton = page.getByRole('button', { name: 'Product Support Create a case' });
 await expect(createCaseButton).toBeVisible({ timeout: 10000 }); // Wait specifically for visibility
 await createCaseButton.click();
 
 await page.getByRole('searchbox', { name: 'Search by product name or' }).fill('vsp');
 
 await page.getByLabel('02i1J000005OnXZQA0 -').getByText('Virtual Storage Platform (VSP)').click();
 
 
 await page.getByRole('button', { name: 'Next' }).click();
 
 await page.getByRole('button', { name: 'Hardware For issues related' }).click();
 
 await page.getByRole('textbox', { name: 'Enter a brief summary of your' }).click();
 
 await page.getByRole('textbox', { name: 'Enter a brief summary of your' }).fill('test Hardware case');
 
 await page.getByRole('textbox', { name: 'Provide details, steps to' }).click();
 
 await page.getByRole('textbox', { name: 'Provide details, steps to' }).fill('testing creating portal support case creation');
 
 await page.locator('c-sc-generic-dropdown-field').filter({ hasText: 'Does this issue impact your' }).getByLabel('Please select an option').click();
 
 await page.getByText('Minimal impact (Non-critical');
 
 await page.locator('c-sc-generic-dropdown-field').filter({ hasText: 'Is your production' }).getByLabel('Please select an option').click();
 
 await page.locator('div').filter({ hasText: /^Yes$/ }).click();
 
 //await page.getByRole('button', { name: 'Please select an option' }).click();
 
// 1. Open the dropdown
const dropdown = page.locator('c-sc-generic-dropdown-field')
  .filter({ hasText: 'Does this issue impact your' });
 
await dropdown.getByRole('button', { name: 'Please select an option' }).click();
 
// 2. Select the specific option (adjust 'Option Name' to your target value)
// Custom dropdowns often use role="option" or role="listitem" for their items
await page.getByRole('option', { name: 'Minimal impact (Non-critical issue)', exact: true }).click();
 
// 3. Optional: Verify the selection was saved
await expect(dropdown).toContainText('Minimal impact (Non-critical issue)');
 
 
// await page.getByText('Some', { exact: true }).click();
 await page.getByText('Some', { exact: true }).dispatchEvent('click');
 
 await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Please select an option' }).click();
 
 //await page.getByText('24x7').click();
await page.getByText('24x7').click({ timeout: 60000 });
 
 
 await page.getByRole('button', { name: 'Next' }).click();
 
 await page.getByRole('button', { name: 'Submit' }).press('ArrowDown');
 
 await page.getByRole('button', { name: 'Submit' }).press('ArrowDown');
 
// After clicking Submit
await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
await page.getByRole('button', { name: 'Submit' }).click();

// 1. Wait for the "creating case" loading message
const loading = page.getByText(/Please wait while we are creating a case/i);
await loading.waitFor({ state: 'visible', timeout: 60000 });

// 2. Wait for the loading message to disappear
await loading.waitFor({ state: 'detached', timeout: 120000 });

// 3. Now wait for the confirmation message
const confirmation = page.getByText(/Your Case Number is/i);
await confirmation.waitFor({ state: 'visible', timeout: 120000 });

// Optional: extract the case number
const text = await confirmation.innerText();
const caseNumber = text.match(/\d+/)?.[0];
console.log('New Case Number:', caseNumber);
});
