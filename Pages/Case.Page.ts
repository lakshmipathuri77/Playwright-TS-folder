
import { Page, expect, Locator } from "@playwright/test";

export class CasePage {

  // -------------------------
  // Locators declaration
  // -------------------------
  private searchBox: Locator;
  private vspOption: Locator;
  private hardwareIssueButton: Locator;
  private summaryTextbox: Locator;
  private detailsTextbox: Locator;
  private impactDropdown: Locator;
  private productionDropdown: Locator;
  private usersAffectedDropdown: Locator;
  private nextButton: Locator;
  private supportHoursDropdown: Locator;
  private submitButton: Locator;
  private loadingText: Locator;
  private confirmationText: Locator;

  // -------------------------
  // Constructor 
  // -------------------------
  constructor(private page: Page) {
    this.searchBox = page.getByRole("searchbox");
    this.vspOption = page.getByText("Virtual Storage Platform (VSP)").nth(0);
    this.hardwareIssueButton = page.getByRole("button", { name: "Hardware For issues related" });
    this.summaryTextbox = page.getByRole("textbox", { name: /brief summary/i });
    this.detailsTextbox = page.getByRole("textbox", { name: /Provide details/i });

    this.impactDropdown = page.locator("c-sc-generic-dropdown-field", {
      hasText: "Does this issue impact your"
    });

    this.productionDropdown = page.locator("c-sc-generic-dropdown-field", {
      hasText: "Is your production"
    });

    this.usersAffectedDropdown = page.locator("c-sc-generic-dropdown-field", {
      hasText: "How many users are affected?"
    });

    this.nextButton = page.getByRole("button", { name: "Next" });
    this.supportHoursDropdown = page.getByRole("button", { name: "Please select an option" });
    this.submitButton = page.getByRole("button", { name: "Submit" });

    this.loadingText = page.getByText(/creating a case/i).first();
    this.confirmationText = page.getByText(/your case number is/i).first();
  }

  // -------------------------
  // Methods
  // -------------------------
  async searchProduct(product: string) {
    await this.searchBox.fill(product);
    await this.vspOption.click();
  }

  async selectHardwareIssue() {
    await this.hardwareIssueButton.click();
  }

  async fillCaseDetails(summary: string, details: string) {
    await this.summaryTextbox.fill(summary);
    await this.detailsTextbox.fill(details);
  }

  async selectImpact(option: string) {
    await this.impactDropdown.getByRole("button", { name: "Please select an option" }).click();
    await this.page.getByRole("option", { name: option, exact: true }).click();
    await expect(this.impactDropdown).toContainText(option);
  }

  async selectProduction(option: string) {
    await this.productionDropdown.getByRole("button", { name: "Please select an option" }).click();

    await this.page.getByText(option, { exact: true }).click();
  }

  async selectusersaffected(option: string) {
    await this.usersAffectedDropdown.getByRole("button", { name: "Please select an option" }).click();

    await this.page.locator("p").filter({ hasText: option }).first().click();
  }

  async clickNext() {
    await this.nextButton.click();
  }

  async selectSupportHours(hours: string) {
    await this.supportHoursDropdown.click();
    await this.page.getByText(hours).click();
  }

  async submitCase() {
    await this.submitButton.click();
    
 await this.loadingText.waitFor({ state: "visible", timeout: 30000 }).catch(() => {});
    await this.loadingText.waitFor({ state: "hidden", timeout: 60000 }).catch(() => {});

    await this.confirmationText.waitFor({ state: "visible", timeout: 60000 }).catch(() => {});

    let caseNumberFromUi = null;

    try {
      const text = await this.confirmationText.innerText();
      caseNumberFromUi = text.match(/\d+/)?.[0] || null;
      await this.page.screenshot({ path: "CaseCreationScreenshot.png" });
    } catch {}

    console.log("New Case Number:", caseNumberFromUi);
    return caseNumberFromUi;
  }
  
}

/*import { Page, expect,Locator } from "@playwright/test";

export class CasePage {
  constructor(private page: Page) {}

  async searchProduct(product: string) {
    await this.page.getByRole("searchbox").fill(product);
  //await this.page.getByText("Virtual Storage Platform (VSP)").click();
  await this.page.getByText("Virtual Storage Platform (VSP)").nth(0).click();

}
    
//async selectStorageOption(label: string, option: string) {
  
  //const dropdown = this.page.getByLabel(label);
  //await dropdown.getByText(option).click();
//}

   
  }

  async selectHardwareIssue() {
    await this.page.getByRole("button", { name: "Hardware For issues related" }).click();
  }

  async fillCaseDetails(summary: string, details: string) {
    await this.page.getByRole("textbox", { name: /brief summary/i }).fill(summary);
    await this.page.getByRole("textbox", { name: /Provide details/i }).fill(details);
  }

  async selectImpact(option: string) {
    const dropdown = this.page.locator("c-sc-generic-dropdown-field", {
      hasText: "Does this issue impact your"
    });

    await dropdown.getByRole("button", { name: "Please select an option" }).click();
    await this.page.getByRole("option", { name: option, exact: true }).click();
    await expect(dropdown).toContainText(option);
  }

  async selectProduction(option: string) 
  {
    await this.page.locator("c-sc-generic-dropdown-field", {hasText: "Is your production"
    }).getByRole("button", { name: "Please select an option" }).click();
    await this.page.getByText(option, { exact: true }).click();
  }

    async selectusersaffected(option: string) 
    {
     await this.page.locator("c-sc-generic-dropdown-field", {hasText: 'How many users are affected?'
    }).getByRole("button", { name: "Please select an option" }).click();
    //await this.page.getByText('How many users are affected?', { exact: true }).click();
    //await this.page.getByRole('button', {exact: true, name: 'few' }).click();
    await this.page.locator('p').filter({ hasText: 'Few' }).first().click();
    }

  //async selectHow many users are affected(option: string) {
    //await page.getByText('How many users are affected?', { exact: true })

  async clickNext() {
    await this.page.getByRole("button", { name: "Next" }).click();
  }

  async selectSupportHours(hours: string) {
    await this.page.getByRole("button", { name: "Please select an option" }).click();
    await this.page.getByText(hours).click();
  }

   async submitCase() {
    await this.page.getByRole("button", { name: "Submit" }).click();
    //  Wait for UI loading text (if it appears) ---
    const loading = this.page.getByText(/creating a case/i).first();

   await loading.waitFor({ state: "visible", timeout: 30000 }).catch(() => {});
   await loading.waitFor({ state: "hidden", timeout: 60000 }).catch(() => {});
     
   // Wait for UI confirmation text (if it appears) ---
   const confirmation = this.page.getByText(/your case number is/i).first();

    await confirmation.waitFor({ state: "visible", timeout: 60000 }).catch(() => {});
     // Extract case number from UI if available ---
   let caseNumberFromUi = null;

   try {
    const text = await confirmation.innerText();
    caseNumberFromUi = text.match(/\d+/)?.[0] || null;
    await this.page.screenshot({path: " Case craetion Screenshot.png"});
  } catch {}

    const finalCaseNumber = caseNumberFromUi ;

  console.log("New Case Number:", finalCaseNumber);

  return finalCaseNumber;
}*/

