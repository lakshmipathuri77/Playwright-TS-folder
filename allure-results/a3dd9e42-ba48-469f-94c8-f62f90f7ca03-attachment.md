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
- generic [active] [ref=e1]:
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
          - generic [ref=e171]:
            - generic [ref=e172]:
              - generic [ref=e173]:
                - heading "Which product do you need help with?" [level=1] [ref=e174]
                - heading "Select the product or solution related to your support request." [level=2] [ref=e175]
              - generic [ref=e178]:
                - paragraph [ref=e179]: 86398-Virtual Storage Platform (VSP)
                - button "Clear selection" [ref=e183] [cursor=pointer]:
                  - img [ref=e184]
            - generic [ref=e186]:
              - generic [ref=e187]:
                - heading "Select the product or solution related to your support request." [level=1] [ref=e188]
                - heading "Review any active cases related to this product before creating a new one" [level=2] [ref=e189]
              - generic [ref=e197]:
                - generic [ref=e199]:
                  - paragraph [ref=e204]: Case Number
                  - paragraph [ref=e209]: Summary
                  - paragraph [ref=e214]: Severity
                  - paragraph [ref=e219]: Opened Date
                - generic [ref=e223]:
                  - button "05392103" [ref=e226] [cursor=pointer]
                  - paragraph [ref=e229]: test Hardware case
                  - paragraph [ref=e235]: 4-Circumvented
                  - paragraph [ref=e238]: 5/12/2026
                - generic [ref=e243]:
                  - button "05392102" [ref=e246] [cursor=pointer]
                  - paragraph [ref=e249]: test Hardware case
                  - paragraph [ref=e255]: 4-Circumvented
                  - paragraph [ref=e258]: 5/12/2026
                - generic [ref=e263]:
                  - button "05392101" [ref=e266] [cursor=pointer]
                  - paragraph [ref=e269]: test Hardware case
                  - paragraph [ref=e275]: 4-Circumvented
                  - paragraph [ref=e278]: 5/12/2026
                - generic [ref=e283]:
                  - button "05392100" [ref=e286] [cursor=pointer]
                  - paragraph [ref=e289]: test Hardware case
                  - paragraph [ref=e295]: 4-Circumvented
                  - paragraph [ref=e298]: 5/12/2026
                - generic [ref=e303]:
                  - button "05392099" [ref=e306] [cursor=pointer]
                  - paragraph [ref=e309]: test Hardware case
                  - paragraph [ref=e315]: 4-Circumvented
                  - paragraph [ref=e318]: 5/12/2026
                - generic [ref=e323]:
                  - button "05392097" [ref=e326] [cursor=pointer]
                  - paragraph [ref=e329]: test Hardware case
                  - paragraph [ref=e335]: 4-Circumvented
                  - paragraph [ref=e338]: 5/12/2026
                - generic [ref=e343]:
                  - button "05391451" [ref=e346] [cursor=pointer]
                  - paragraph [ref=e349]: test Hardware case
                  - paragraph [ref=e355]: "-"
                  - paragraph [ref=e358]: 5/6/2026
                - generic [ref=e363]:
                  - button "05391086" [ref=e366] [cursor=pointer]
                  - paragraph [ref=e369]: vsp
                  - paragraph [ref=e375]: "-"
                  - paragraph [ref=e378]: 4/28/2026
          - generic [ref=e379]:
            - button "Cancel" [ref=e380] [cursor=pointer]:
              - generic [ref=e383]: Cancel
            - button "Next" [ref=e385] [cursor=pointer]:
              - generic [ref=e387]: Next
    - contentinfo [ref=e388]:
      - generic [ref=e389]:
        - generic [ref=e399]:
          - generic [ref=e408]:
            - link "Hitachi Vantara" [ref=e409] [cursor=pointer]:
              - /url: https://hitachivantara.com
              - img "Hitachi Vantara" [ref=e410]
            - list [ref=e411]:
              - listitem [ref=e412]:
                - link "Follow us on Twitter" [ref=e413] [cursor=pointer]:
                  - /url: https://twitter.com/HitachiVantara
                  - img "Follow us on Twitter" [ref=e414]
              - listitem [ref=e415]:
                - link "Follow us on Facebook" [ref=e416] [cursor=pointer]:
                  - /url: https://www.facebook.com/HitachiVantara/
                  - img "Follow us on Facebook" [ref=e417]
              - listitem [ref=e418]:
                - link "Follow us on Linkedin" [ref=e419] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hitachi-vantara
                  - img "Follow us on Linkedin" [ref=e420]
              - listitem [ref=e421]:
                - link "Follow us on Youtube" [ref=e422] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/HitachiVantara
                  - img "Follow us on Youtube" [ref=e423]
              - listitem [ref=e424]:
                - link "Follow us on Instagram" [ref=e425] [cursor=pointer]:
                  - /url: https://www.instagram.com/hitachivantara/
                  - img "Follow us on Instagram" [ref=e426]
          - generic [ref=e432]:
            - generic [ref=e437]:
              - generic [ref=e444]:
                - generic:
                  - paragraph
                - paragraph [ref=e446]: EXPLORE
                - link "Support Website Overview" [ref=e448] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403030000319
                  - paragraph [ref=e450]: Support Website Overview
                - link "Hitachi Vantara Products" [ref=e452] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/products/storage-platforms
                  - paragraph [ref=e454]: Hitachi Vantara Products
                - link "Pentaho & Lumada Resources" [ref=e456] [cursor=pointer]:
                  - /url: https://support.pentaho.com/hc/en-us
                  - paragraph [ref=e458]: Pentaho & Lumada Resources
                - link "Customer Support Services" [ref=e460] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/customer-support
                  - paragraph [ref=e462]: Customer Support Services
                - link "Training & Certification" [ref=e464] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/learning/training
                  - paragraph [ref=e466]: Training & Certification
              - generic [ref=e474]:
                - paragraph [ref=e476]: INFORMATION
                - link "Product Documentation" [ref=e478] [cursor=pointer]:
                  - /url: https://docs.hitachivantara.com/
                  - paragraph [ref=e480]: Product Documentation
                - link "Product Lifecycle Matrix" [ref=e482] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249
                  - paragraph [ref=e484]: Product Lifecycle Matrix
                - link "Product Compatibility" [ref=e486] [cursor=pointer]:
                  - /url: https://compatibility.hitachivantara.com/
                  - paragraph [ref=e488]: Product Compatibility
                - link "Customer Support Terms" [ref=e490] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/specifications/hitachi-support-service-descriptions-and-deliverables.pdf
                  - paragraph [ref=e492]: Customer Support Terms
                - link "Global Services Area" [ref=e494] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/datasheet/geographic-service-coverage.pdf
                  - paragraph [ref=e496]: Global Services Area
            - generic [ref=e502]:
              - generic [ref=e509]:
                - paragraph [ref=e511]: SUPPORT
                - link "Data Collection" [ref=e513] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930123652333
                  - paragraph [ref=e515]: Data Collection
                - link "Support Questions" [ref=e517] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930143145580
                  - paragraph [ref=e519]: Support Questions
                - link "Security Advisories" [ref=e521] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=241403050017684
                  - paragraph [ref=e523]: Security Advisories
                - link "Knowledge" [ref=e525] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/ss/?guest=0
                  - paragraph [ref=e527]: Knowledge
              - generic [ref=e535]:
                - paragraph [ref=e537]: GET IN TOUCH
                - link "Careers" [ref=e539] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/company/careers.html
                  - paragraph [ref=e541]: Careers
                - link "Contact Support" [ref=e543] [cursor=pointer]:
                  - /url: /contact-us
                  - paragraph [ref=e545]: Contact Support
                - link "Partner Contact" [ref=e547] [cursor=pointer]:
                  - /url: https://hitachivantara.com
                  - paragraph [ref=e549]: Partner Contact
                - link "Partner Locator" [ref=e551] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/partners/partner-locator
                  - paragraph [ref=e553]: Partner Locator
        - generic [ref=e562]:
          - paragraph [ref=e570]: © Hitachi Vantara LLC 2026. All Rights Reserved.
          - list [ref=e580]:
            - listitem [ref=e581]:
              - link "Terms of Use" [ref=e582] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/terms-of-use
            - listitem [ref=e583]:
              - link "Privacy Policy" [ref=e584] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - listitem [ref=e585]:
              - link "Legal" [ref=e586] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal
  - button "Hello, have a question? Let’s chat." [ref=e592] [cursor=pointer]:
    - img [ref=e594]
  - button "Open Survey" [ref=e598] [cursor=pointer]:
    - generic [ref=e599]: Feedback
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