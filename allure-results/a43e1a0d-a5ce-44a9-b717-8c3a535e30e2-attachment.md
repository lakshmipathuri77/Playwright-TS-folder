# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FrameworkEC.Spec.ts >> Create new support case
- Location: tests\FrameworkEC.Spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('listbox') to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
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
          - button "User" [ref=e82]:
            - img "User" [ref=e83] [cursor=pointer]
    - main [ref=e84]:
      - generic [ref=e91]:
        - heading "Create a Case" [level=1] [ref=e102]
        - generic [ref=e112]:
          - generic [ref=e115]:
            - generic [ref=e116]:
              - heading "How Can We Help ?" [level=1] [ref=e117]
              - heading "Choose the category that best matches your request to get help faster." [level=2] [ref=e118]
            - generic [ref=e119]:
              - button "Product Support Create a case for technical issues, configuration questions, or troubleshooting related to Hitachi Vantara products and solutions." [ref=e121]:
                - generic [ref=e123]:
                  - generic [ref=e124]:
                    - paragraph [ref=e126]: Product Support
                    - img [ref=e129]
                  - paragraph [ref=e132]: Create a case for technical issues, configuration questions, or troubleshooting related to Hitachi Vantara products and solutions.
              - button "Portal Support Report issues related to logging in, navigation, access permissions, or any other Support Connect portal functionality." [ref=e135]:
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - paragraph [ref=e140]: Portal Support
                    - img [ref=e143]
                  - paragraph [ref=e146]: Report issues related to logging in, navigation, access permissions, or any other Support Connect portal functionality.
          - button "Cancel" [ref=e149] [cursor=pointer]:
            - generic [ref=e152]: Cancel
    - contentinfo [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e164]:
          - generic [ref=e173]:
            - link "Hitachi Vantara" [ref=e174] [cursor=pointer]:
              - /url: https://hitachivantara.com
              - img "Hitachi Vantara" [ref=e175]
            - list [ref=e176]:
              - listitem [ref=e177]:
                - link "Follow us on Twitter" [ref=e178] [cursor=pointer]:
                  - /url: https://twitter.com/HitachiVantara
                  - img "Follow us on Twitter" [ref=e179]
              - listitem [ref=e180]:
                - link "Follow us on Facebook" [ref=e181] [cursor=pointer]:
                  - /url: https://www.facebook.com/HitachiVantara/
                  - img "Follow us on Facebook" [ref=e182]
              - listitem [ref=e183]:
                - link "Follow us on Linkedin" [ref=e184] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hitachi-vantara
                  - img "Follow us on Linkedin" [ref=e185]
              - listitem [ref=e186]:
                - link "Follow us on Youtube" [ref=e187] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/HitachiVantara
                  - img "Follow us on Youtube" [ref=e188]
              - listitem [ref=e189]:
                - link "Follow us on Instagram" [ref=e190] [cursor=pointer]:
                  - /url: https://www.instagram.com/hitachivantara/
                  - img "Follow us on Instagram" [ref=e191]
          - generic [ref=e197]:
            - generic [ref=e202]:
              - generic [ref=e209]:
                - generic:
                  - paragraph
                - paragraph [ref=e211]: EXPLORE
                - link "Support Website Overview" [ref=e213] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403030000319
                  - paragraph [ref=e215]: Support Website Overview
                - link "Hitachi Vantara Products" [ref=e217] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/products/storage-platforms
                  - paragraph [ref=e219]: Hitachi Vantara Products
                - link "Pentaho & Lumada Resources" [ref=e221] [cursor=pointer]:
                  - /url: https://support.pentaho.com/hc/en-us
                  - paragraph [ref=e223]: Pentaho & Lumada Resources
                - link "Customer Support Services" [ref=e225] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/customer-support
                  - paragraph [ref=e227]: Customer Support Services
                - link "Training & Certification" [ref=e229] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/learning/training
                  - paragraph [ref=e231]: Training & Certification
              - generic [ref=e239]:
                - paragraph [ref=e241]: INFORMATION
                - link "Product Documentation" [ref=e243] [cursor=pointer]:
                  - /url: https://docs.hitachivantara.com/
                  - paragraph [ref=e245]: Product Documentation
                - link "Product Lifecycle Matrix" [ref=e247] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249
                  - paragraph [ref=e249]: Product Lifecycle Matrix
                - link "Product Compatibility" [ref=e251] [cursor=pointer]:
                  - /url: https://compatibility.hitachivantara.com/
                  - paragraph [ref=e253]: Product Compatibility
                - link "Customer Support Terms" [ref=e255] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/specifications/hitachi-support-service-descriptions-and-deliverables.pdf
                  - paragraph [ref=e257]: Customer Support Terms
                - link "Global Services Area" [ref=e259] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/datasheet/geographic-service-coverage.pdf
                  - paragraph [ref=e261]: Global Services Area
            - generic [ref=e267]:
              - generic [ref=e274]:
                - paragraph [ref=e276]: SUPPORT
                - link "Data Collection" [ref=e278] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930123652333
                  - paragraph [ref=e280]: Data Collection
                - link "Support Questions" [ref=e282] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930143145580
                  - paragraph [ref=e284]: Support Questions
                - link "Security Advisories" [ref=e286] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=241403050017684
                  - paragraph [ref=e288]: Security Advisories
                - link "Knowledge" [ref=e290] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/ss/?guest=0
                  - paragraph [ref=e292]: Knowledge
              - generic [ref=e300]:
                - paragraph [ref=e302]: GET IN TOUCH
                - link "Careers" [ref=e304] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/company/careers.html
                  - paragraph [ref=e306]: Careers
                - link "Contact Support" [ref=e308] [cursor=pointer]:
                  - /url: /contact-us
                  - paragraph [ref=e310]: Contact Support
                - link "Partner Contact" [ref=e312] [cursor=pointer]:
                  - /url: https://hitachivantara.com
                  - paragraph [ref=e314]: Partner Contact
                - link "Partner Locator" [ref=e316] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/partners/partner-locator
                  - paragraph [ref=e318]: Partner Locator
        - generic [ref=e327]:
          - paragraph [ref=e335]: © Hitachi Vantara LLC 2026. All Rights Reserved.
          - list [ref=e345]:
            - listitem [ref=e346]:
              - link "Terms of Use" [ref=e347] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/terms-of-use
            - listitem [ref=e348]:
              - link "Privacy Policy" [ref=e349] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - listitem [ref=e350]:
              - link "Legal" [ref=e351] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal
  - generic [ref=e356]: Create Case
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class NewCasePage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async selectProduct(product: string) {
  7  |     //await this.page.getByRole('searchbox', { name: 'Search by product name or' }).fill(product);
  8  |     //await this.page.getByText('Virtual Storage Platform (VSP)').click();
  9  |     await this.page.getByRole('searchbox', { name: /Search by product/i }).fill(product);
> 10 |  await this.page.getByRole('listbox').waitFor();
     |                                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  11 |  await this.page.getByRole('option', { name: /Virtual Storage Platform/i }).click();
  12 | 
  13 |   }
  14 | 
  15 |   async fillCaseDetails() {
  16 |     await this.page.getByRole('button', { name: 'Next' }).click();
  17 |     await this.page.getByRole('button', { name: 'Hardware For issues related' }).click();
  18 | 
  19 |     await this.page.getByRole('textbox', { name: 'Enter a brief summary of your' })
  20 |       .fill('test Hardware case');
  21 | 
  22 |     await this.page.getByRole('textbox', { name: 'Provide details, steps to' })
  23 |       .fill('testing creating portal support case creation');
  24 | 
  25 |     await this.page.getByText('Minimal impact').click();
  26 |     await this.page.getByText('Yes').click();
  27 |     await this.page.getByText('Some').click();
  28 | 
  29 |     await this.page.getByRole('button', { name: 'Next' }).click();
  30 |     await this.page.getByText('24x7').click();
  31 |     await this.page.getByRole('button', { name: 'Next' }).click();
  32 |   }
  33 | 
  34 |   async submitCase() {
  35 |     await this.page.getByRole('button', { name: 'Submit' }).click();
  36 |   }
  37 | 
  38 |   async getCaseNumber(): Promise<string> {
  39 |     const locator = this.page.getByText('Your Case Number is', { exact: false });
  40 |     await locator.waitFor();
  41 | 
  42 |     const text = await locator.innerText();
  43 |     const caseNumber = text.match(/\d+/)?.[0] ?? 'UNKNOWN';
  44 | 
  45 |     return caseNumber;
  46 |   }
  47 | 
  48 |   async viewCaseDetails() {
  49 |     await this.page.getByText('View Case Details').click();
  50 |   }
  51 | }
  52 | 
```