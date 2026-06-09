import { test ,Page} from "@playwright/test";
import { LoginPage } from '../Pages/loginpage';
import { HomePage } from "../Pages/HomePage";
import { CasePage } from "../Pages/Case.Page";

import { testData } from "../data/testdata";

test("Create new support case using POM", async ({ page }) => {
  const login = new LoginPage(page);
  const home =new HomePage(page);
  const casePage = new CasePage(page);

  await login.goto(testData.portalurl);
   await login.clickLogin();
  await login.enterEmail(testData.email);
  await login.enterPassword(testData.password);

  await home.openMyCases();
  await home.clickNewCase();
  await home.clickCreateCase();

  await casePage.searchProduct(testData.productSearch);
  //await CasePage.getByLabel(testData.label).getByText(testData.option).click();
  
 //await casePage.selectStorageOption(testData.label,testData.option);
 await page.getByRole('button', { name: 'Next' }).click();

  await casePage.selectHardwareIssue();
  await casePage.fillCaseDetails(testData.caseSummary, testData.caseDetails);

  await casePage.selectImpact(testData.impactOption);
  await casePage.selectProduction(testData.productionOption);
  await casePage.selectusersaffected (testData.productionOption2);
  
 

  await casePage.clickNext();
  await casePage.selectSupportHours(testData.supportHours);

  await casePage.clickNext();
  const newCaseNumber = await casePage.submitCase();
  await page.screenshot({path:'screenshots/CaseCreation.png'});
  
  
 
 
 
 
});
