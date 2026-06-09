
import { Page } from "@playwright/test";

export class HomePage {

  // Locators
  // -------------------------
  private myAccountButton;
  private myCasesLink;
  private newCaseButton;
  private createCaseButton;

  // -------------------------
  // Constructor
  // -------------------------
  constructor(private page: Page) {
    this.myAccountButton = page.getByRole('button', { name: 'My Account' }).first();
    this.myCasesLink = page.getByRole("link", { name: "My Cases" });
    this.newCaseButton = page.getByRole("button", { name: "New Case" });
    this.createCaseButton = page.getByRole("button", { name: "Product Support Create a case" });
  }

  // -------------------------
  // Methods
  // -------------------------
  async openMyCases() {
    this.page.on("dialog", dialog => dialog.dismiss());
    await this.myAccountButton.click();
    await this.myCasesLink.click();
  }

  async clickNewCase() {
    await this.newCaseButton.click();
  }

  async clickCreateCase() {
    await this.createCaseButton.waitFor({ state: "visible", timeout: 10000 });
    await this.createCaseButton.click();
  }

   async openChat() {
    await this.page.getByRole('button', { name: 'Hello, have a question? Let’s' }).click();
  }
}





/*import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async openMyCases() {
    this.page.on('dialog', dialog => dialog.dismiss());
    await this.page.locator("button", { hasText: "My Account" }).first().click();
    await this.page.getByRole("link", { name: "My Cases" }).click();
  }

  async clickNewCase() {
    await this.page.getByRole("button", { name: "New Case" }).click();
  }

  async clickCreateCase() {
    const createCaseButton = this.page.getByRole("button", { name: "Product Support Create a case" });
    await createCaseButton.waitFor({ state: "visible", timeout: 10000 });
    await createCaseButton.click();
  }
}*/