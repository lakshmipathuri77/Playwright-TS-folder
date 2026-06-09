import { Page, FrameLocator } from '@playwright/test';

export class ChatWindowPage {
  private frame: FrameLocator;

  constructor(private page: Page) {
    this.frame = this.page.getByRole('dialog', { name: 'Chat Window' }).contentFrame();
  }

  async sendMessage(message: string) {
    const textbox = this.frame.getByRole('textbox', { name: 'Type your message...' });
    await textbox.fill(message);
    await this.frame.getByRole('button', { name: 'Send message' }).click();
  }

  async clickButton(buttonName: string) {
    await this.frame.getByRole('button', { name: buttonName }).click();
  }

  async selectOption(optionText: string) {
    await this.page.getByRole('option', { name: optionText, exact: true }).click();
  }

  async waitForCaseCreation() {
    const loading = this.page.getByText(/creating a case/i).first();
    await loading.waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    await loading.waitFor({ state: 'hidden', timeout: 60000 }).catch(() => {});
  }

  async getCaseNumber(): Promise<string | null> {
    const confirmation = this.page.getByText(/case number is|case #/i).first();
    await confirmation.waitFor({ state: 'visible', timeout: 60000 }).catch(() => {});
    
    try {
      const text = await confirmation.innerText();
      const caseNumber = text.match(/\d+/)?.[0] || null;
      return caseNumber;
    } catch (e) {
      console.error('Failed to extract case number:', e);
      return null;
    }
  }
}