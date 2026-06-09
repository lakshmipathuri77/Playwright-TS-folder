import { Page, expect } from "@playwright/test";

export class LoginPage {

  
  // Variables defined as per login page
  // -------------------------
  private loginLink;
  private emailTextbox;
  private continueButton;
  private passwordTextbox;
  private continuePasswordButton;

  // Constructor created & passed the Locators to above created Calss Variables
  // -------------------------
  constructor(private page: Page) 
  {
    this.loginLink = page.getByRole("link", { name: "Log In" });
    this.emailTextbox = page.getByRole("textbox", { name: "Email address" });
    this.continueButton = page.getByRole("button", { name: "Continue", exact: true });
    this.passwordTextbox = page.getByRole("textbox", { name: "Password" });
    this.continuePasswordButton = page.getByRole("button", { name: "Continue" });
  }

  // Methods
  // -------------------------
  async goto(url:string) {
    await this.page.goto(url);
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async enterEmail(email: string) {
    await this.emailTextbox.fill(email);
    await this.continueButton.click();
  }

  async enterPassword(password: string) {
    await this.passwordTextbox.fill(password);
    await this.continuePasswordButton.click();
  }
}

/*import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://support-stage.hitachivantara.com/");
  }

  async clickLogin() {
    await this.page.getByRole("link", { name: "Log In" }).click();
  }

  async enterEmail(email: string) {
    await this.page.getByRole("textbox", { name: "Email address" }).fill(email);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
  }

  async enterPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Continue" }).click();
  }
}*/