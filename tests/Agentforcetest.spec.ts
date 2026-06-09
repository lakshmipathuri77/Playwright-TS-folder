/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://auth-stage.hitachivantara.com/u/login/identifier?state=hKFo2SBGOVBsOGctUElfRUJfbkJ4ZVljUjNTU0stcEltUHJtS6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIExpa2xDTTBzQUVLSlFLT1NfLWFXS3RSaGpGbzQxRU5ko2NpZNkgaG0zaXZPaTVPOXhmb1BEeDA3Z3lydkNrVDZWeGRLSW4');
  await page.getByRole('textbox', { name: 'Email address' }).fill('test_var.asp_1604@ctj6vd5i.mailosaur.net');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue without passkeys' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('What’s new with VSP One Object');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'What’s new with VSP One Object' }).click();
  const [popup] = await Promise.all([page.waitForEvent('popup'),page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'What’s new with Chat' }).click()
]);
await popup.waitForLoadState();

  
  
  
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Virtual Storage Platform One' }).click();
  const page2 = await page2Promise;
  await page2.goto('https://partnerportal-uat.hitachivantara.com/s/virtual-storage-platform-one');
  await page2.getByRole('button', { name: 'Close' }).click();
  await page2.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page2.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page2.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing HDPS Performance on VSP E590 with 25G iSCSI ');
  const page3Promise = page2.waitForEvent('popup');
  await page2.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Maximizing HDPS Performance' }).click();
  const page3 = await page3Promise;
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP 360 Overview Customer');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP 360 ');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Scroll the latest messages' }).click();
  const page4Promise = page.waitForEvent('popup');
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'VSP 360 Overview Customer' }).click();
  const page4 = await page4Promise;
  const download1 = await download1Promise;
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP-5600-2n-performance-evaluation-customer-case-study_04877467');
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'VSP-5600-2N Performance' }).click();
  const page5 = await page5Promise;
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('VSP 360 Sales');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Virtual Storage Platform One Object Customer Presentation');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('button', { name: 'Scroll the latest messages' }).click();
  const page6Promise = page.waitForEvent('popup');
  const download2Promise = page.waitForEvent('download');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Download Here' }).click();
  const page6 = await page6Promise;
  const download2 = await download2Promise;
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing Veeam Performance on VSP One Block 26 with ADR ');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  const page7Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Virtual Storage Platform One' }).nth(1).click();
  const page7 = await page7Promise;
  await page7.goto('https://partnerportal-uat.hitachivantara.com/s/virtual-storage-platform-one');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Hitachi for Mainframe');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).press('ControlOrMeta+c');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing Veeam Performance on VSP One Block 26 QLC ');
  const page8Promise = page.waitForEvent('popup');
  await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame().getByRole('link', { name: 'Maximizing Veeam Performance on VSP One Block 26 QLC' }).click();
  const page8 = await page8Promise;
}); */

import { test, expect } from '@playwright/test';

test('Chat Window Popup Flow', async ({ page }) => {

  // ---------------- LOGIN ----------------
  await page.goto('https://auth-stage.hitachivantara.com/u/login/identifier?state=hKFo2SBGOVBsOGctUElfRUJfbkJ4ZVljUjNTU0stcEltUHJtS6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIExpa2xDTTBzQUVLSlFLT1NfLWFXS3RSaGpGbzQxRU5ko2NpZNkgaG0zaXZPaTVPOXhmb1BEeDA3Z3lydkNrVDZWeGRLSW4');

  await page.getByRole('textbox', { name: 'Email address' }).fill('test_var.asp_1604@ctj6vd5i.mailosaur.net');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue without passkeys' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  // ---------------- OPEN CHAT ----------------
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();

  const chatFrame = await page.getByRole('dialog', { name: 'Chat Window' }).contentFrame();

  // ---------------- FIRST POPUP ----------------
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('What’s new with VSP One Object');

  const [popup1] = await Promise.all([
    page.waitForEvent('popup'),
    chatFrame.getByRole('link', { name: 'What’s new with VSP One Object' }).click()
  ]);
  await popup1.waitForLoadState();

  // ---------------- SECOND POPUP ----------------
  const [popup2] = await Promise.all([
    page.waitForEvent('popup'),
    chatFrame.getByRole('link', { name: 'Virtual Storage Platform One' }).click()
  ]);
  await popup2.waitForLoadState();
  await popup2.goto('https://partnerportal-uat.hitachivantara.com/s/virtual-storage-platform-one');

  // ---------------- THIRD POPUP ----------------
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing HDPS Performance on VSP E590 with 25G iSCSI');

  const [popup3] = await Promise.all([
    page.waitForEvent('popup'),
    chatFrame.getByRole('link', { name: 'Maximizing HDPS Performance' }).click()
  ]);
  await popup3.waitForLoadState();

  // ---------------- FOURTH POPUP + DOWNLOAD ----------------
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('VSP 360 Overview Customer');

  const [popup4, download1] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForEvent('download'),
    chatFrame.getByRole('link', { name: 'VSP 360 Overview Customer' }).click()
  ]);

  // ---------------- FIFTH POPUP ----------------
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('VSP-5600-2n-performance-evaluation-customer-case-study_04877467');

  const [popup5] = await Promise.all([
    page.waitForEvent('popup'),
    chatFrame.getByRole('link', { name: 'VSP-5600-2N Performance' }).click()
  ]);
  await popup5.waitForLoadState();

  // ---------------- SIXTH POPUP + DOWNLOAD ----------------
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('Virtual Storage Platform One Object Customer Presentation');

  const [popup6, download2] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForEvent('download'),
    chatFrame.getByRole('link', { name: 'Download Here' }).click()
  ]);

  // ---------------- SEVENTH POPUP ----------------
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('Maximizing Veeam Performance on VSP One Block 26 QLC');

  const [popup7] = await Promise.all([
    page.waitForEvent('popup'),
    chatFrame.getByRole('link', { name: 'Maximizing Veeam Performance on VSP One Block 26 QLC' }).click()
  ]);
  await popup7.waitForLoadState();
});
