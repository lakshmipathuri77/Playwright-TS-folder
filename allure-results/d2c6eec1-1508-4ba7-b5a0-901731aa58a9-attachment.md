# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createCase.spec.ts >> Create new support case using POM
- Location: tests\createCase.spec.ts:7:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Yes') resolved to 3 elements:
    1) <p title="Yes" lwc-52d2bqgbnv6="" class="text-content">Yes</p> aka getByText('Yes', { exact: true })
    2) <div tabindex="0" nodeid="undefined" class="qual_ol_ans_item">…</div> aka getByText('Yes, easily')
    3) <div tabindex="0" nodeid="undefined" class="qual_ol_ans_item">…</div> aka getByText('Yes, eventually')

Call log:
  - waiting for getByText('Yes')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e11]:
    - link "Skip to Main" [ref=e12] [cursor=pointer]:
      - /url: javascript:void(0);
    - banner [ref=e13]:
      - generic [ref=e14]:
        - banner "Site header" [ref=e23]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.hitachi.com/
          - generic [ref=e40]:
            - textbox "Search..." [ref=e42]
            - img [ref=e44]
          - button "English Select your language" [ref=e51] [cursor=pointer]:
            - text: English
            - img [ref=e53]
            - generic [ref=e56]: Select your language
        - generic [ref=e66]:
          - paragraph [ref=e74]: Hitachi Vantara Support Connect
          - navigation [ref=e83]:
            - list [ref=e84]:
              - listitem [ref=e85]:
                - link "Home" [ref=e86] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e88]:
                - button "My Account" [ref=e89] [cursor=pointer]
              - listitem [ref=e91]:
                - button "Resources" [ref=e92] [cursor=pointer]
              - listitem [ref=e94]:
                - button "Learn" [ref=e95] [cursor=pointer]
          - button "User" [ref=e103]:
            - img "User" [ref=e104] [cursor=pointer]
    - main [ref=e105]:
      - generic [ref=e112]:
        - heading "New Product Support Case" [level=1] [ref=e123]
        - generic [ref=e133]:
          - generic [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e137]:
                - button [ref=e140] [cursor=pointer]:
                  - img [ref=e141]
                - paragraph [ref=e144]: Select Product
              - img [ref=e146]
            - generic [ref=e147]:
              - generic [ref=e148]:
                - paragraph [ref=e152]: "2"
                - paragraph [ref=e153]: Case Details
              - img [ref=e155]
            - generic [ref=e156]:
              - generic [ref=e157]:
                - paragraph [ref=e161]: "3"
                - paragraph [ref=e162]: Case Information
              - img [ref=e164]
            - generic [ref=e166]:
              - paragraph [ref=e170]: "4"
              - paragraph [ref=e171]: Review & Submit
          - generic [ref=e173]:
            - generic [ref=e174]:
              - generic [ref=e175]:
                - heading "Select the issue category..." [level=1] [ref=e176]
                - heading "Tell us what type of issue you’re experiencing. This helps us route your case to the right team." [level=2] [ref=e177]
              - generic [ref=e178]:
                - button "Hardware For issues related to physical components, devices, or parts." [ref=e179]:
                  - generic [ref=e181]:
                    - generic [ref=e182]:
                      - paragraph [ref=e184]: Hardware
                      - img [ref=e187]
                    - paragraph [ref=e190]: For issues related to physical components, devices, or parts.
                - button "Software For problems or questions involving software functionality, configuration, or installation." [ref=e191]:
                  - generic [ref=e193]:
                    - generic [ref=e194]:
                      - paragraph [ref=e196]: Software
                      - img [ref=e199]
                    - paragraph [ref=e202]: For problems or questions involving software functionality, configuration, or installation.
                - button "Performance For cases where the system or product is running slower than expected or showing degraded performance." [ref=e203]:
                  - generic [ref=e205]:
                    - generic [ref=e206]:
                      - paragraph [ref=e208]: Performance
                      - img [ref=e211]
                    - paragraph [ref=e214]: For cases where the system or product is running slower than expected or showing degraded performance.
                - button "Security For vulnerabilities, access issues, or security-related concerns." [ref=e215]:
                  - generic [ref=e217]:
                    - generic [ref=e218]:
                      - paragraph [ref=e220]: Security
                      - img [ref=e223]
                    - paragraph [ref=e226]: For vulnerabilities, access issues, or security-related concerns.
                - button "Question For general inquiries or guidance that are not related to a defect or performance issue." [ref=e227]:
                  - generic [ref=e229]:
                    - generic [ref=e230]:
                      - paragraph [ref=e232]: Question
                      - img [ref=e235]
                    - paragraph [ref=e238]: For general inquiries or guidance that are not related to a defect or performance issue.
            - generic [ref=e239]:
              - paragraph [ref=e241]: Additional Information
              - generic [ref=e244]:
                - generic [ref=e246]:
                  - paragraph [ref=e247]: Summary
                  - paragraph [ref=e248]: "*"
                - textbox "Enter a brief summary of your issue…" [ref=e252]: test Hardware case
              - generic [ref=e254]:
                - generic [ref=e257]:
                  - paragraph [ref=e258]: Description
                  - paragraph [ref=e259]: "*"
                - textbox "Provide details, steps to reproduce, and any error messages…" [ref=e262]: testing creating portal support case creation
              - generic [ref=e263]:
                - generic [ref=e266]:
                  - paragraph [ref=e268]:
                    - paragraph [ref=e269]: Does this issue impact your business operations?
                    - paragraph [ref=e270]: "*"
                  - button "Minimal impact (Non-critical issue)" [ref=e272] [cursor=pointer]:
                    - paragraph [ref=e274]: Minimal impact (Non-critical issue)
                    - img [ref=e276]
                - generic [ref=e280]:
                  - paragraph [ref=e282]:
                    - paragraph [ref=e283]: Is your production environment affected?
                    - paragraph [ref=e284]: "*"
                  - generic [ref=e285]:
                    - button "Please select an option" [active] [ref=e286] [cursor=pointer]:
                      - paragraph [ref=e288]: Please select an option
                      - img [ref=e290]
                    - listbox [ref=e296]:
                      - option "Yes" [ref=e297]:
                        - paragraph [ref=e299]: "Yes"
                      - option "No" [ref=e300]:
                        - paragraph [ref=e302]: "No"
                - generic [ref=e305]:
                  - paragraph [ref=e307]:
                    - paragraph [ref=e308]: How many users are affected?
                    - paragraph [ref=e309]: "*"
                  - button "Please select an option" [ref=e311] [cursor=pointer]:
                    - paragraph [ref=e313]: Please select an option
                    - img [ref=e315]
            - generic [ref=e317]:
              - generic [ref=e318]:
                - heading "Suggested Resources" [level=1] [ref=e319]
                - heading "Here are some helpful resources that may help resolve your issue." [level=2] [ref=e320]
              - generic [ref=e321]: Loading suggested resources...
          - generic [ref=e322]:
            - button "Cancel" [ref=e323] [cursor=pointer]:
              - generic [ref=e326]: Cancel
            - generic [ref=e327]:
              - button "Back" [ref=e328] [cursor=pointer]:
                - generic [ref=e330]: Back
              - button "Next" [ref=e331] [cursor=pointer]:
                - generic [ref=e333]: Next
    - contentinfo [ref=e334]:
      - generic [ref=e335]:
        - generic [ref=e345]:
          - generic [ref=e354]:
            - link "Hitachi Vantara" [ref=e355] [cursor=pointer]:
              - /url: https://hitachivantara.com
              - img "Hitachi Vantara" [ref=e356]
            - list [ref=e357]:
              - listitem [ref=e358]:
                - link "Follow us on Twitter" [ref=e359] [cursor=pointer]:
                  - /url: https://twitter.com/HitachiVantara
                  - img "Follow us on Twitter" [ref=e360]
              - listitem [ref=e361]:
                - link "Follow us on Facebook" [ref=e362] [cursor=pointer]:
                  - /url: https://www.facebook.com/HitachiVantara/
                  - img "Follow us on Facebook" [ref=e363]
              - listitem [ref=e364]:
                - link "Follow us on Linkedin" [ref=e365] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hitachi-vantara
                  - img "Follow us on Linkedin" [ref=e366]
              - listitem [ref=e367]:
                - link "Follow us on Youtube" [ref=e368] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/HitachiVantara
                  - img "Follow us on Youtube" [ref=e369]
              - listitem [ref=e370]:
                - link "Follow us on Instagram" [ref=e371] [cursor=pointer]:
                  - /url: https://www.instagram.com/hitachivantara/
                  - img "Follow us on Instagram" [ref=e372]
          - generic [ref=e378]:
            - generic [ref=e383]:
              - generic [ref=e390]:
                - generic:
                  - paragraph
                - paragraph [ref=e392]: EXPLORE
                - link "Support Website Overview" [ref=e394] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403030000319
                  - paragraph [ref=e396]: Support Website Overview
                - link "Hitachi Vantara Products" [ref=e398] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/products/storage-platforms
                  - paragraph [ref=e400]: Hitachi Vantara Products
                - link "Pentaho & Lumada Resources" [ref=e402] [cursor=pointer]:
                  - /url: https://support.pentaho.com/hc/en-us
                  - paragraph [ref=e404]: Pentaho & Lumada Resources
                - link "Customer Support Services" [ref=e406] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/customer-support
                  - paragraph [ref=e408]: Customer Support Services
                - link "Training & Certification" [ref=e410] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/learning/training
                  - paragraph [ref=e412]: Training & Certification
              - generic [ref=e420]:
                - paragraph [ref=e422]: INFORMATION
                - link "Product Documentation" [ref=e424] [cursor=pointer]:
                  - /url: https://docs.hitachivantara.com/
                  - paragraph [ref=e426]: Product Documentation
                - link "Product Lifecycle Matrix" [ref=e428] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249
                  - paragraph [ref=e430]: Product Lifecycle Matrix
                - link "Product Compatibility" [ref=e432] [cursor=pointer]:
                  - /url: https://compatibility.hitachivantara.com/
                  - paragraph [ref=e434]: Product Compatibility
                - link "Customer Support Terms" [ref=e436] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/specifications/hitachi-support-service-descriptions-and-deliverables.pdf
                  - paragraph [ref=e438]: Customer Support Terms
                - link "Global Services Area" [ref=e440] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/datasheet/geographic-service-coverage.pdf
                  - paragraph [ref=e442]: Global Services Area
            - generic [ref=e448]:
              - generic [ref=e455]:
                - paragraph [ref=e457]: SUPPORT
                - link "Data Collection" [ref=e459] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930123652333
                  - paragraph [ref=e461]: Data Collection
                - link "Support Questions" [ref=e463] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930143145580
                  - paragraph [ref=e465]: Support Questions
                - link "Security Advisories" [ref=e467] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=241403050017684
                  - paragraph [ref=e469]: Security Advisories
                - link "Knowledge" [ref=e471] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/ss/?guest=0
                  - paragraph [ref=e473]: Knowledge
              - generic [ref=e481]:
                - paragraph [ref=e483]: GET IN TOUCH
                - link "Careers" [ref=e485] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/company/careers.html
                  - paragraph [ref=e487]: Careers
                - link "Contact Support" [ref=e489] [cursor=pointer]:
                  - /url: /contact-us
                  - paragraph [ref=e491]: Contact Support
                - link "Partner Contact" [ref=e493] [cursor=pointer]:
                  - /url: https://hitachivantara.com
                  - paragraph [ref=e495]: Partner Contact
                - link "Partner Locator" [ref=e497] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/partners/partner-locator
                  - paragraph [ref=e499]: Partner Locator
        - generic [ref=e508]:
          - paragraph [ref=e516]: © Hitachi Vantara LLC 2026. All Rights Reserved.
          - list [ref=e526]:
            - listitem [ref=e527]:
              - link "Terms of Use" [ref=e528] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/terms-of-use
            - listitem [ref=e529]:
              - link "Privacy Policy" [ref=e530] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - listitem [ref=e531]:
              - link "Legal" [ref=e532] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal
  - button "Hello, have a question? Let’s chat." [ref=e538] [cursor=pointer]:
    - img [ref=e540]
  - button "Open Survey" [ref=e544] [cursor=pointer]:
    - generic [ref=e545]: Feedback
```

# Test source

```ts
  1  | import { Page, expect,Locator } from "@playwright/test";
  2  | 
  3  | export class CasePage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async searchProduct(product: string) {
  7  |     await this.page.getByRole("searchbox").fill(product);
  8  |   //await this.page.getByText("Virtual Storage Platform (VSP)").click();
  9  |   await this.page.getByText("Virtual Storage Platform (VSP)").nth(0).click();
  10 | 
  11 | }
  12 |     
  13 | //async selectStorageOption(label: string, option: string) {
  14 |   
  15 |   //const dropdown = this.page.getByLabel(label);
  16 |   //await dropdown.getByText(option).click();
  17 | //}
  18 | 
  19 |     /*await this.page.getByText("Virtual Storage Platform (VSP)").click();
  20 |     await this.page.getByLabel(label).getByText(Option).click();
  21 |     await this.page.getByRole("button", { name: "Next" }).click();
  22 |   }*/
  23 | 
  24 |   async selectHardwareIssue() {
  25 |     await this.page.getByRole("button", { name: "Hardware For issues related" }).click();
  26 |   }
  27 | 
  28 |   async fillCaseDetails(summary: string, details: string) {
  29 |     await this.page.getByRole("textbox", { name: /brief summary/i }).fill(summary);
  30 |     await this.page.getByRole("textbox", { name: /Provide details/i }).fill(details);
  31 |   }
  32 | 
  33 |   async selectImpact(option: string) {
  34 |     const dropdown = this.page.locator("c-sc-generic-dropdown-field", {
  35 |       hasText: "Does this issue impact your"
  36 |     });
  37 | 
  38 |     await dropdown.getByRole("button", { name: "Please select an option" }).click();
  39 |     await this.page.getByRole("option", { name: option, exact: true }).click();
  40 |     await expect(dropdown).toContainText(option);
  41 |   }
  42 | 
  43 |   async selectProduction(option: string) 
  44 |   {
  45 |     await this.page.locator("c-sc-generic-dropdown-field", {hasText: "Is your production"
  46 |     }).getByRole("button", { name: "Please select an option" }).click();
> 47 |     await this.page.getByText(option).click();
     |                                       ^ Error: locator.click: Error: strict mode violation: getByText('Yes') resolved to 3 elements:
  48 |   }
  49 | 
  50 |     async selectusersaffected(option: string) 
  51 |     {
  52 |      await this.page.locator("c-sc-generic-dropdown-field", {hasText: 'How many users are affected?'
  53 |     }).getByRole("button", { name: "Please select an option" }).click();
  54 |     //await this.page.getByText('How many users are affected?', { exact: true }).click();
  55 |     await this.page.getByRole('button', { name: 'Few' }).click();
  56 |     }
  57 | 
  58 |   //async selectHow many users are affected(option: string) {
  59 |     //await page.getByText('How many users are affected?', { exact: true })
  60 | 
  61 |   async clickNext() {
  62 |     await this.page.getByRole("button", { name: "Next" }).click();
  63 |   }
  64 | 
  65 |   async selectSupportHours(hours: string) {
  66 |     await this.page.getByRole("button", { name: "Please select an option" }).click();
  67 |     await this.page.getByText(hours).click();
  68 |   }
  69 | 
  70 |   async submitCase() {
  71 |     await this.page.getByRole("button", { name: "Submit" }).click();
  72 | 
  73 |     const loading = this.page.getByText(/creating a case/i);
  74 |     await loading.waitFor({ state: "visible", timeout: 60000 });
  75 |     await loading.waitFor({ state: "detached", timeout: 120000 });
  76 | 
  77 |     const confirmation = this.page.getByText(/Your Case Number is/i);
  78 |     await confirmation.waitFor({ state: "visible", timeout: 120000 });
  79 | 
  80 |     const text = await confirmation.innerText();
  81 |     const caseNumber = text.match(/\d+/)?.[0];
  82 |     console.log("New Case Number:", caseNumber);
  83 |   }
  84 | }
  85 | 
  86 | 
```