import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { HomePage } from '../Pages/HomePage';
import { ChatWindowPage } from '../Pages/ChatwindowPage';
import { caseData } from '../data/casedata';

test.use({
  viewport: {
    height: 600,
    width: 900
  }
});

test('Create Case via Agentforce Chatbot - Product Support Case Creation', async ({ page }) => {
  // Initialize page objects
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const chat = new ChatWindowPage(page);

  // Scenario 1: Customer/Partner initiates case creation
  // Login to Support Connect
  await login.goto('https://support-stage.hitachivantara.com/');
  await login.clickLogin();
  await login.enterEmail(caseData.email);
  
  // Wait for password page to load
  await page.waitForTimeout(5000);
  await login.enterPassword(caseData.password);

  // Wait for home page to load
  await page.waitForTimeout(8000);

  // Close any popup dialogs
  try {
    await page.getByRole('button', { name: 'Close' }).click();
  } catch (e) {
    // Continue if no close button
  }

  // Open chat window
  await home.openChat();
  await page.waitForTimeout(14000);

  // Send "Create a case" message - FIXED: Use correct textbox and send the message
  
  await page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();
  await page.waitForTimeout(45000);
  const chatFrame = page.getByRole('dialog', { name: 'Chat Window' }).contentFrame();
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('Create a case');
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(10000);

  // Validate user identity and role - respond with "yes" if asked to confirm role
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill('yes');
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Scenario 2: Case creation for Product Support
  // Provide issue description
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.description);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Select product - selecting asset/product name
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.product);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(25000);

  // Select category/issue type
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.category);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Provide impact assessment
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.impact);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Specify environment
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.environment);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Confirm if issue is reproducible
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.reproducible);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Confirm business impact
  await chatFrame.getByRole('textbox', { name: 'Type your message...' }).fill(caseData.businessImpact);
  await chatFrame.getByRole('button', { name: 'Send message' }).click();
  await page.waitForTimeout(14000);

  // Wait for case creation confirmation and extract case number
  const loading = page.getByText(/creating a case/i).first();
  await loading.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
  await loading.waitFor({ state: 'hidden', timeout: 60000 }).catch(() => {});

  const confirmation = page.getByText(/case number is|case #/i).first();
  await confirmation.waitFor({ state: 'visible', timeout: 60000 }).catch(() => {});

  // Extract and log the case number
  let caseNumber = null;
  try {
    const text = await confirmation.innerText();
    caseNumber = text.match(/\d+/)?.[0] || null;
    console.log('New Case Number:', caseNumber);
    await page.screenshot({ path: 'case-creation-success.png' });
    
    // Validate case was created successfully
    expect(caseNumber).toBeTruthy();
  } catch (e) {
    console.error('Failed to extract case number:', e);
    throw e;
  }
});
