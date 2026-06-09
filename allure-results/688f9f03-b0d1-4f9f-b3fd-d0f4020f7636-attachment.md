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
  - waiting for getByRole('button', { name: 'New Case' })

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
                - button "My Account" [expanded] [active] [ref=e89] [cursor=pointer]
                - list "My Account" [ref=e92]:
                  - listitem [ref=e93]:
                    - link "My Sites" [ref=e94] [cursor=pointer]:
                      - /url: /sites
                  - listitem [ref=e95]:
                    - link "My Products" [ref=e96] [cursor=pointer]:
                      - /url: /products
                  - listitem [ref=e97]:
                    - link "My Cases" [ref=e98] [cursor=pointer]:
                      - /url: /cases
                  - listitem [ref=e99]:
                    - link "Portal Support" [ref=e100] [cursor=pointer]:
                      - /url: https://support-stage.hitachivantara.com/create-case?portalcase=y
              - listitem [ref=e102]:
                - button "Resources" [ref=e103] [cursor=pointer]
              - listitem [ref=e105]:
                - button "Learn" [ref=e106] [cursor=pointer]
          - button "User" [ref=e114]:
            - img "User" [ref=e115] [cursor=pointer]
    - main [ref=e116]:
      - generic [ref=e125]:
        - generic [ref=e138]:
          - region "Welcome" [ref=e142]:
            - paragraph [ref=e143]: Good morning, Patrick.
            - paragraph [ref=e144]: How can we help?
          - textbox "Search..." [ref=e151]
          - generic [ref=e158]:
            - generic [ref=e163]:
              - link "Knowledge Find answers to common questions" [ref=e167] [cursor=pointer]:
                - /url: https://hitachivantaradev.rightanswers.com/portal/ss/?isIframe=false&authID=auth-saml-hitachi-vantara-portal&isIframe=false
                - generic [ref=e168]:
                  - img [ref=e169]
                  - heading "Knowledge" [level=2] [ref=e170]
                  - paragraph [ref=e171]: Find answers to common questions
              - link "Community Connect with other users" [ref=e176] [cursor=pointer]:
                - /url: https://auth-stage.hitachivantara.com/samlp/uSHHN1xTvAHo2Sojce8ORqWRUBsQsB7d
                - generic [ref=e177]:
                  - img [ref=e178]
                  - heading "Community" [level=2] [ref=e179]
                  - paragraph [ref=e180]: Connect with other users
            - generic [ref=e186]:
              - link "Documentation Product guides and reference" [ref=e190] [cursor=pointer]:
                - /url: https://auth-stage.hitachivantara.com/samlp/N5GQMUcHAAbYK1kbFk1f4SFZcU9Bs4rk
                - generic [ref=e191]:
                  - img [ref=e192]
                  - heading "Documentation" [level=2] [ref=e193]
                  - paragraph [ref=e194]: Product guides and reference
              - link "Downloads Get the latest software" [ref=e199] [cursor=pointer]:
                - /url: download
                - generic [ref=e200]:
                  - img [ref=e201]
                  - heading "Downloads" [level=2] [ref=e202]
                  - paragraph [ref=e203]: Get the latest software
        - generic [ref=e211]:
          - heading "Technical Bulletin" [level=1] [ref=e214]
          - status [ref=e217]
          - generic [ref=e222]:
            - link "Manage Subscriptions" [ref=e224] [cursor=pointer]:
              - /url: https://sso-stage.hitachivantara.com/profile/view
            - link "View All" [ref=e226] [cursor=pointer]:
              - /url: /technical-bulletin
        - generic [ref=e235]:
          - generic [ref=e236]:
            - generic [ref=e237]:
              - heading "Learning and Training" [level=1] [ref=e238]
              - paragraph [ref=e239]: Training in progress
            - link "View All Trainings →" [ref=e241] [cursor=pointer]:
              - /url: "#"
          - status [ref=e244]
        - generic [ref=e257]:
          - heading "My Certifications" [level=1] [ref=e260]
          - list "Available certifications" [ref=e262]:
            - listitem [ref=e263]:
              - generic [ref=e264]:
                - heading "HQT-4180 Hitachi Vantara Qualified Professional - VSP Midrange Family Installation" [level=2] [ref=e265]
                - paragraph [ref=e266]: "ID: 7086"
              - generic [ref=e267]:
                - generic [ref=e269]: Certified (Renewal In Progress)
                - generic [ref=e270]:
                  - paragraph [ref=e271]: "Cert Date: 11/18/2025"
                  - paragraph [ref=e272]: "Exp Date: 11/18/2028"
            - listitem [ref=e273]:
              - generic [ref=e274]:
                - heading "HQT-6741 Hitachi Vantara Qualified Professional - Ops Center administration" [level=2] [ref=e275]
                - paragraph [ref=e276]: "ID: 7087"
              - generic [ref=e277]:
                - generic [ref=e279]: Certified (Renewal In Progress)
                - generic [ref=e280]:
                  - paragraph [ref=e281]: "Cert Date: 11/18/2025"
                  - paragraph [ref=e282]: "Exp Date: 11/18/2028"
    - contentinfo [ref=e283]:
      - generic [ref=e284]:
        - generic [ref=e294]:
          - generic [ref=e303]:
            - link "Hitachi Vantara" [ref=e304] [cursor=pointer]:
              - /url: https://hitachivantara.com
              - img "Hitachi Vantara" [ref=e305]
            - list [ref=e306]:
              - listitem [ref=e307]:
                - link "Follow us on Twitter" [ref=e308] [cursor=pointer]:
                  - /url: https://twitter.com/HitachiVantara
                  - img "Follow us on Twitter" [ref=e309]
              - listitem [ref=e310]:
                - link "Follow us on Facebook" [ref=e311] [cursor=pointer]:
                  - /url: https://www.facebook.com/HitachiVantara/
                  - img "Follow us on Facebook" [ref=e312]
              - listitem [ref=e313]:
                - link "Follow us on Linkedin" [ref=e314] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hitachi-vantara
                  - img "Follow us on Linkedin" [ref=e315]
              - listitem [ref=e316]:
                - link "Follow us on Youtube" [ref=e317] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/HitachiVantara
                  - img "Follow us on Youtube" [ref=e318]
              - listitem [ref=e319]:
                - link "Follow us on Instagram" [ref=e320] [cursor=pointer]:
                  - /url: https://www.instagram.com/hitachivantara/
                  - img "Follow us on Instagram" [ref=e321]
          - generic [ref=e327]:
            - generic [ref=e332]:
              - generic [ref=e339]:
                - generic:
                  - paragraph
                - paragraph [ref=e341]: EXPLORE
                - link "Support Website Overview" [ref=e343] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403030000319
                  - paragraph [ref=e345]: Support Website Overview
                - link "Hitachi Vantara Products" [ref=e347] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/products/storage-platforms
                  - paragraph [ref=e349]: Hitachi Vantara Products
                - link "Pentaho & Lumada Resources" [ref=e351] [cursor=pointer]:
                  - /url: https://support.pentaho.com/hc/en-us
                  - paragraph [ref=e353]: Pentaho & Lumada Resources
                - link "Customer Support Services" [ref=e355] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/customer-support
                  - paragraph [ref=e357]: Customer Support Services
                - link "Training & Certification" [ref=e359] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/services/learning/training
                  - paragraph [ref=e361]: Training & Certification
              - generic [ref=e369]:
                - paragraph [ref=e371]: INFORMATION
                - link "Product Documentation" [ref=e373] [cursor=pointer]:
                  - /url: https://docs.hitachivantara.com/
                  - paragraph [ref=e375]: Product Documentation
                - link "Product Lifecycle Matrix" [ref=e377] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=242403040002249
                  - paragraph [ref=e379]: Product Lifecycle Matrix
                - link "Product Compatibility" [ref=e381] [cursor=pointer]:
                  - /url: https://compatibility.hitachivantara.com/
                  - paragraph [ref=e383]: Product Compatibility
                - link "Customer Support Terms" [ref=e385] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/specifications/hitachi-support-service-descriptions-and-deliverables.pdf
                  - paragraph [ref=e387]: Customer Support Terms
                - link "Global Services Area" [ref=e389] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/pdf/datasheet/geographic-service-coverage.pdf
                  - paragraph [ref=e391]: Global Services Area
            - generic [ref=e397]:
              - generic [ref=e404]:
                - paragraph [ref=e406]: SUPPORT
                - link "Data Collection" [ref=e408] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930123652333
                  - paragraph [ref=e410]: Data Collection
                - link "Support Questions" [ref=e412] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=240930143145580
                  - paragraph [ref=e414]: Support Questions
                - link "Security Advisories" [ref=e416] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/app/portlets/results/viewsolution.jsp?solutionid=241403050017684
                  - paragraph [ref=e418]: Security Advisories
                - link "Knowledge" [ref=e420] [cursor=pointer]:
                  - /url: https://knowledge.hitachivantara.com/portal/ss/?guest=0
                  - paragraph [ref=e422]: Knowledge
              - generic [ref=e430]:
                - paragraph [ref=e432]: GET IN TOUCH
                - link "Careers" [ref=e434] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/company/careers.html
                  - paragraph [ref=e436]: Careers
                - link "Contact Support" [ref=e438] [cursor=pointer]:
                  - /url: /contact-us
                  - paragraph [ref=e440]: Contact Support
                - link "Partner Contact" [ref=e442] [cursor=pointer]:
                  - /url: https://hitachivantara.com
                  - paragraph [ref=e444]: Partner Contact
                - link "Partner Locator" [ref=e446] [cursor=pointer]:
                  - /url: https://www.hitachivantara.com/en-us/partners/partner-locator
                  - paragraph [ref=e448]: Partner Locator
        - generic [ref=e457]:
          - paragraph [ref=e465]: © Hitachi Vantara LLC 2026. All Rights Reserved.
          - list [ref=e475]:
            - listitem [ref=e476]:
              - link "Terms of Use" [ref=e477] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/terms-of-use
            - listitem [ref=e478]:
              - link "Privacy Policy" [ref=e479] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - listitem [ref=e480]:
              - link "Legal" [ref=e481] [cursor=pointer]:
                - /url: https://www.hitachivantara.com/en-us/legal
  - region "Cookie Banner" [ref=e487]:
    - alertdialog "Privacy" [ref=e488]:
      - button "Cookies" [ref=e490] [cursor=pointer]:
        - img "Hitachi Vantara Logo" [ref=e491]
      - generic [ref=e492]:
        - generic [ref=e496]:
          - text: This site uses cookies from Hitachi and third parties for our own business purposes and to personalize your experience. By using this site, you agree to the use of cookies. For more information, visit
          - link "More information about your privacy, opens in a new tab" [ref=e497] [cursor=pointer]:
            - /url: https://www.hitachivantara.com/en-us/legal/privacy
            - text: Hitachi's Cookies Policy.
        - button "Close" [ref=e499] [cursor=pointer]
  - button "Open Survey" [ref=e501] [cursor=pointer]:
    - generic [ref=e502]: Feedback
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class MyCasesPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async startNewCase() {
> 7  |     await this.page.getByRole('button', { name: 'New Case' }).click();
     |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  8  |     await this.page.getByRole('button', { name: 'Product Support Create a case' }).click();
  9  |   }
  10 | }
  11 | 
```