import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 600, height: 600 }
});




test('test AEM assests English', async ({ page }) => {
  await page.goto('https://auth-stage.hitachivantara.com/u/login/identifier?state=hKFo2SBaOXJhMG5Yc1hLZ09iTlVkRjI0Um01LWhYb0R2UkE5LaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGduYUY4SXYwT1Y4ai1RakFpNmludEhSY0x0U3hJWXBRo2NpZNkgaG0zaXZPaTVPOXhmb1BEeDA3Z3lydkNrVDZWeGRLSW4');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test_var.asp_1604@ctj6vd5i.mailosaur.net');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue without passkeys' }).click();
  //await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();
  await page.waitForTimeout(45000);
   //await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).waitFor({ state: 'hidden'});

   
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('What’s new with VSP One Object ');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);
  //await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('What’s new with VSP One Object');
  //await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('Partner Connect Page');
  //await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).waitFor({ state: 'hidden'});
 await page.waitForTimeout(14000);
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing HDPS Performance on VSP E590 with 25G iSCSI');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('Maximizing HDPS Performance on VSP E590 with 25G iSCSI');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP 360 Overview ');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Send message' }).click();
  //await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('listitem').filter({ hasText: 'VSP 360 Overview Customer' })).toBeVisible();
  //await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('listitem').filter({ hasText: 'VSP 360 Overview Customer' })).toBeVisible();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP-5600-2n-performance-evaluation-customer-case-study_04877467');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'VSP-5600-2n-performance-' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'VSP-5600-2n-performance-' })).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('VSP-5600-2n-performance-evaluation-customer-case-study_04877467');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP 360 Sales Quick Reference');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('VSP 360 Sales Quick Reference');
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('VSP 360 Overview Customer Presentation');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Virtual Storage Platform One Object Customer Presentation ');
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('VSP 360 Overview Customer Presentation');
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('One Data Platform. No Limits.');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing Veeam Performance on VSP One Block 26 with ADR');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByText('1', { exact: true }).click();
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('Maximizing Veeam Performance on VSP One Block 26 with ADR');
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('Hitachi Integrated Systems Solution with Microsoft SQL Server Reference Architecture Guide');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing Veeam Performance on VSP One Block 26 QLC ');
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('Maximizing Veeam Performance on VSP One Block 26 QLC');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Partner Connect Page' }).nth(2).click();
  const page1 = await page1Promise;
  await page1.goto('https://partnerportal-uat.hitachivantara.com/s/virtual-storage-platform-one');
  await expect(page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByLabel('Chat Window', { exact: true })).toContainText('Partner Connect Page');
});

/*import { test, expect } from '@playwright/test';

test('test AEM assets English', async ({ page }) => {

  // ---------------- LOGIN ----------------
  await page.goto('https://auth-stage.hitachivantara.com/u/login/identifier?state=hKFo2SBaOXJhMG5Yc1hLZ09iTlVkRjI0Um01LWhYb0R2UkE5LaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGduYUY4SXYwT1Y4ai1RakFpNmludEhSY0x0U3hJWXBRo2NpZNkgaG0zaXZPaTVPOXhmb1BEeDA3Z3lydkNrVDZWeGRLSW4');

  await page.getByRole('textbox', { name: 'Email address' }).fill('test_var.asp_1604@ctj6vd5i.mailosaur.net');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue without passkeys' }).click();

  // ---------------- OPEN CHAT ----------------
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).waitFor({ state: 'hidden' });

  // ---------------- Helper Function ----------------
  async function ask(text: string) {
    const frame = await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame();

    // Wait for textbox to be ready
    await frame.getByRole('textbox', { name: 'Type your message...' }).waitFor({ state: 'visible' });

     // Wait for bot to respond (textbox becomes ready again)
    await frame.getByRole('textbox', { name: 'Type your message...' })
      .waitFor({ state: 'visible' });
  }

  const frame = await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame();

  // ---------------- QUESTIONS WITH WAITS ----------------

  await ask('What’s new with VSP One Object');
  await expect(frame.getByLabel('Chat Window', { exact: true })).toContainText('What’s new with VSP One Object');

  await ask('Maximizing HDPS Performance on VSP E590 with 25G iSCSI');
  await expect(frame.getByLabel('Chat Window', { exact: true })).toContainText('Maximizing HDPS Performance on VSP E590 with 25G iSCSI');

  await ask('VSP 360 Overview');
  await expect(frame.getByRole('listitem').filter({ hasText: 'VSP 360 Overview Customer' })).toBeVisible();

  await ask('VSP-5600-2n-performance-evaluation-customer-case-study_04877467');
  await expect(frame.getByRole('link', { name: 'VSP-5600-2n-performance-' })).toBeVisible();

  await ask('VSP 360 Sales Quick Reference');
  await expect(frame.getByLabel('Chat Window', { exact: true })) .toContainText('VSP 360 Sales Quick Reference');

  await ask('Virtual Storage Platform One Object Customer Presentation');
  await expect(frame.getByLabel('Chat Window', { exact: true })).toContainText('VSP 360 Overview Customer Presentation');

  await ask('Maximizing Veeam Performance on VSP One Block 26 with ADR');
  await expect(frame.getByLabel('Chat Window', { exact: true })).toContainText('Maximizing Veeam Performance on VSP One Block 26 with ADR');

  await ask('Maximizing Veeam Performance on VSP One Block 26 QLC');
  await expect(frame.getByLabel('Chat Window', { exact: true })).toContainText('Maximizing Veeam Performance on VSP One Block 26 QLC');

});
*/