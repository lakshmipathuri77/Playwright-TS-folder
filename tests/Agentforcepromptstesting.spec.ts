import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('test', async ({ page }) => {
  await page.goto('https://auth-stage.hitachivantara.com/u/login/identifier?state=hKFo2SB5cF9oU0t5RTF5bUNTOWRKWGhZWGJ5VF9QZEI3UjJjMKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHppMzM0bU5RZjZGUEktcWdfeE4yZzdsa05ZXzE0S0Y1o2NpZNkgaG0zaXZPaTVPOXhmb1BEeDA3Z3lydkNrVDZWeGRLSW4');
  await page.getByRole('textbox', { name: 'Email address' }).fill('test_var.asp_1604@ctj6vd5i.mailosaur.net');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue without passkeys' }).click();
  await page.goto('https://partnerportal-uat.hitachivantara.com/s/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Start a new chat...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('What’s new with VSP One Object');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'What’s new with VSP One Object' }).click();
  const page1 = await page1Promise;
  await page1.locator('body').click();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Partner Connect Page' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'What’s new with VSP One Object' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' })).toBeVisible();
  await page.goto('https://partnerportal-uat.hitachivantara.com/s/');
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Partner Connect Page' }).click();
  const page2 = await page2Promise;
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' })).toBeVisible();
  await page.goto('https://partnerportal-uat.hitachivantara.com/s/');
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
 
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing HDPS Performance on VSP E590 with 25G iSCSI');
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Maximizing HDPS Performance' }).click();
  const page4 = await page4Promise;
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' })).toBeEmpty();
  await page.goto('https://partnerportal-uat.hitachivantara.com/s/');
});