import { Page } from "@playwright/test";

export class LoginPageagent {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://support-stage.hitachivantara.com/");
  }

  async clickLogin() {
    await this.page.getByRole("link", { name: "Log In" }).click();
  }

  async login(email: string, password: string) {
    await this.page.getByRole("textbox", { name: "Email address" }).fill(email);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();

    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Continue" }).click();
  }
}
