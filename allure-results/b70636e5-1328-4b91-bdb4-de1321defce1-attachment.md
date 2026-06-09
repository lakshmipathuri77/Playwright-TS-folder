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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Virtual Storage Platform (VSP)')

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
                - paragraph [ref=e141]: "1"
                - paragraph [ref=e142]: Select Product
              - img [ref=e144]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - paragraph [ref=e150]: "2"
                - paragraph [ref=e151]: Case Details
              - img [ref=e153]
            - generic [ref=e154]:
              - generic [ref=e155]:
                - paragraph [ref=e159]: "3"
                - paragraph [ref=e160]: Case Information
              - img [ref=e162]
            - generic [ref=e164]:
              - paragraph [ref=e168]: "4"
              - paragraph [ref=e169]: Review & Submit
          - generic [ref=e172]:
            - generic [ref=e173]:
              - heading "Which product do you need help with?" [level=1] [ref=e174]
              - heading "Select the product or solution related to your support request." [level=2] [ref=e175]
            - generic [ref=e178]:
              - generic [ref=e179]:
                - searchbox "Search by product name or serial number..." [active] [ref=e181]: vsp
                - img [ref=e186] [cursor=pointer]
              - status [ref=e192]:
                - status [ref=e194]
          - generic [ref=e199]:
            - button "Cancel" [ref=e200] [cursor=pointer]:
              - generic [ref=e203]: Cancel
            - button "Next" [disabled] [ref=e205]:
              - generic [ref=e207]: Next
    - contentinfo [ref=e208]:
      - generic [ref=e209]:
        - generic [ref=e219]:
          - generic [ref=e228]:
            - link "Hitachi Vantara" [ref=e229] [cursor=pointer]:
              - /url: https://hitachivantara.com
              - img "Hitachi Vantara" [ref=e230]
            - list [ref=e231]:
              - listitem [ref=e232]:
                - link "Follow us on Twitter" [ref=e233] [cursor=pointer]:
                  - /url: https://twitter.com/HitachiVantara
                  - img "Follow us on Twitter" [ref=e234]
              - listitem [ref=e235]:
                - link "Follow us on Facebook" [ref=e236] [cursor=pointer]:
                  - /url: https://www.facebook.com/HitachiVantara/
                  - img "Follow us on Facebook" [ref=e237]
              - listitem [ref=e238]:
                - link "Follow us on Linkedin" [ref=e239] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hitachi-vantara
                  - img "Follow us on Linkedin" [ref=e240]
              - listitem [ref=e241]:
                - link "Follow us on Youtube" [ref=e242] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/HitachiVantara
                  - img "Follow us on Youtube" [ref=e243]
              - listitem [ref=e244]:
                - link "Follow us on Instagram" [ref=e245] [cursor=pointer]:
                  - /url: https://www.instagram.com/hitachivantara/
                  - img "Follow us on Instagram" [ref=e246]
          - generic [ref=e252]:
            - generic [ref=e257]:
              - generic [ref=e264]:
                - generic:
                  - paragraph
                - paragraph [ref=e266]: EXPLORE
                - link "Support Website Overview" [ref=e268] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403030000319
                  - paragraph [ref=e270]: Support Website Overview
                - link "Hitachi Vantara Products" [ref=e272] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/products/storage-platforms
                  - paragraph [ref=e274]: Hitachi Vantara Products
                - link "Pentaho & Lumada Resources" [ref=e276] [cursor=pointer]:
                  - /url: https://support.pentaho.com/hc/en-us
                  - paragraph [ref=e278]: Pentaho & Lumada Resources
                - link "Customer Support Services" [ref=e280] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/customer-support
                  - paragraph [ref=e282]: Customer Support Services
                - link "Training & Certification" [ref=e284] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/learning/training
                  - paragraph [ref=e286]: Training & Certification
              - generic [ref=e294]:
                - paragraph [ref=e296]: INFORMATION
                - link "Product Documentation" [ref=e298] [cursor=pointer]:
                  - /url: https://docs.hitachivantara.com/
                  - paragraph [ref=e300]: Product Documentation
                - link "Product Lifecycle Matrix" [ref=e302] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249
                  - paragraph [ref=e304]: Product Lifecycle Matrix
                - link "Product Compatibility" [ref=e306] [cursor=pointer]:
                  - /url: https://compatibility.hitachivantara.com/
                  - paragraph [ref=e308]: Product Compatibility
                - link "Customer Support Terms" [ref=e310] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/specifications/hitachi-support-service-descriptions-and-deliverables.pdf
                  - paragraph [ref=e312]: Customer Support Terms
                - link "Global Services Area" [ref=e314] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/datasheet/geographic-service-coverage.pdf
                  - paragraph [ref=e316]: Global Services Area
            - generic [ref=e322]:
              - generic [ref=e329]:
                - paragraph [ref=e331]: SUPPORT
                - link "Data Collection" [ref=e333] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930123652333
                  - paragraph [ref=e335]: Data Collection
                - link "Support Questions" [ref=e337] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930143145580
                  - paragraph [ref=e339]: Support Questions
                - link "Security Advisories" [ref=e341] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=241403050017684
                  - paragraph [ref=e343]: Security Advisories
                - link "Knowledge" [ref=e345] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/ss/?guest=0
                  - paragraph [ref=e347]: Knowledge
              - generic [ref=e355]:
                - paragraph [ref=e357]: GET IN TOUCH
                - link "Careers" [ref=e359] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/company/careers.html
                  - paragraph [ref=e361]: Careers
                - link "Contact Support" [ref=e363] [cursor=pointer]:
                  - /url: /contact-us
                  - paragraph [ref=e365]: Contact Support
                - link "Partner Contact" [ref=e367] [cursor=pointer]:
                  - /url: https://hitachivantara.com
                  - paragraph [ref=e369]: Partner Contact
                - link "Partner Locator" [ref=e371] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/partners/partner-locator
                  - paragraph [ref=e373]: Partner Locator
        - generic [ref=e382]:
          - paragraph [ref=e390]: © Hitachi Vantara LLC 2026. All Rights Reserved.
          - list [ref=e400]:
            - listitem [ref=e401]:
              - link "Terms of Use" [ref=e402] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/terms-of-use
            - listitem [ref=e403]:
              - link "Privacy Policy" [ref=e404] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - listitem [ref=e405]:
              - link "Legal" [ref=e406] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal
  - button "Hello, have a question? Let’s chat." [ref=e412] [cursor=pointer]:
    - img [ref=e414]
  - button "Open Survey" [ref=e418] [cursor=pointer]:
    - generic [ref=e419]: Feedback
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class NewCasePage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async selectProduct(product: string) {
  7  |     await this.page.getByRole('searchbox', { name: 'Search by product name or' }).fill(product);
> 8  |     await this.page.getByText('Virtual Storage Platform (VSP)').click();
     |                                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  9  |   }
  10 | 
  11 |   async fillCaseDetails() {
  12 |     await this.page.getByRole('button', { name: 'Next' }).click();
  13 |     await this.page.getByRole('button', { name: 'Hardware For issues related' }).click();
  14 | 
  15 |     await this.page.getByRole('textbox', { name: 'Enter a brief summary of your' })
  16 |       .fill('test Hardware case');
  17 | 
  18 |     await this.page.getByRole('textbox', { name: 'Provide details, steps to' })
  19 |       .fill('testing creating portal support case creation');
  20 | 
  21 |     await this.page.getByText('Minimal impact').click();
  22 |     await this.page.getByText('Yes').click();
  23 |     await this.page.getByText('Some').click();
  24 | 
  25 |     await this.page.getByRole('button', { name: 'Next' }).click();
  26 |     await this.page.getByText('24x7').click();
  27 |     await this.page.getByRole('button', { name: 'Next' }).click();
  28 |   }
  29 | 
  30 |   async submitCase() {
  31 |     await this.page.getByRole('button', { name: 'Submit' }).click();
  32 |   }
  33 | 
  34 |   async getCaseNumber(): Promise<string> {
  35 |     const locator = this.page.getByText('Your Case Number is', { exact: false });
  36 |     await locator.waitFor();
  37 | 
  38 |     const text = await locator.innerText();
  39 |     const caseNumber = text.match(/\d+/)?.[0] ?? 'UNKNOWN';
  40 | 
  41 |     return caseNumber;
  42 |   }
  43 | 
  44 |   async viewCaseDetails() {
  45 |     await this.page.getByText('View Case Details').click();
  46 |   }
  47 | }
  48 | 
```