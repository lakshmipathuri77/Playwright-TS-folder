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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Password' })

```

# Page snapshot

```yaml
- main [ref=e3]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "Hitachi Vantara Stage" [ref=e8]
      - heading "Welcome" [level=1] [ref=e9]
      - paragraph [ref=e11]: Log in to continue to Salesforce Support Connect - Stage.
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e19]:
              - generic [ref=e20]: Email address *
              - textbox "Email address" [active] [ref=e21]: patrick.flanagan@alliedirishbank.mailosaur.net
            - generic [ref=e22]:
              - img "captcha" [ref=e24]
              - generic [ref=e25]:
                - generic [ref=e26]:
                  - generic [ref=e27]: Enter the code shown above *
                  - textbox "Enter the code shown above" [ref=e28]
                - generic [ref=e29]: Please enter captcha code
          - paragraph [ref=e30]:
            - link "Can't log in to your account?" [ref=e31] [cursor=pointer]:
              - /url: /u/login/password-reset-start/Username-Password-Authentication?state=hKFo2SBiSXc5S2RGYlVnU0lDRlFKT2hQTmhxSHR5UGhHbFJNdqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDZPemxNNHM0bXRpSnJBcUc0QjI1dEpHaHY2MGY0d1BFo2NpZNkgc1VkM1IxV3VyWUR5UlV5T0JISEd6amJWcnptR3JLSEI
          - button "Continue" [ref=e33] [cursor=pointer]
        - paragraph [ref=e34]:
          - text: "For Partners, Customers and Guests:"
          - link "Register Now!" [ref=e35] [cursor=pointer]:
            - /url: https://sso-stage.hitachivantara.com/register?client_id=sUd3R1WurYDyRUyOBHHGzjbVrzmGrKHB&redirect=https://support-stage.hitachivantara.com
          - text: Need help?
          - link "Partner |" [ref=e36] [cursor=pointer]:
            - /url: https://sso-stage.hitachivantara.com/partnerSupport.html
          - link "Customer/Guest |" [ref=e37] [cursor=pointer]:
            - /url: https://support.hitachivantara.com/en_us/contact-us.html
          - link "Employee" [ref=e38] [cursor=pointer]:
            - /url: https://sso.hitachivantara.com/en_us/contact-us-employee.html
      - generic [ref=e40]: Or
      - button "Continue with a passkey" [ref=e43] [cursor=pointer]:
        - generic [ref=e45]: Continue with a passkey
      - generic [ref=e47]:
        - button "Connection icon Single Sign-On - Hitachi Group" [ref=e49] [cursor=pointer]:
          - img "Connection icon" [ref=e50]
          - generic [ref=e51]: Single Sign-On - Hitachi Group
        - button "Connection icon Single Sign-On - Hitachi Vantara, Hitachi Federal" [ref=e53] [cursor=pointer]:
          - img "Connection icon" [ref=e54]
          - generic [ref=e55]: Single Sign-On - Hitachi Vantara, Hitachi Federal
        - button "Connection icon Single Sign-On - Hitachi Digital" [ref=e57] [cursor=pointer]:
          - img "Connection icon" [ref=e58]
          - generic [ref=e59]: Single Sign-On - Hitachi Digital
        - button "Connection icon Single Sign-On - Hitachi Digital Services" [ref=e61] [cursor=pointer]:
          - img "Connection icon" [ref=e62]
          - generic [ref=e63]: Single Sign-On - Hitachi Digital Services
```

# Test source

```ts
  1  | /*import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async goto() 
  7  |   {
  8  |     await this.page.goto('https://support-stage.hitachivantara.com/');
  9  |   }
  10 | 
  11 |   async login(email: string, password: string) {
  12 |     await this.page.getByRole('link', { name: 'Log In' }).click();
  13 |     await this.page.getByRole('textbox', { name: 'Email address' }).fill(username);
  14 |     await this.page.getByRole('button', { name: 'Continue', exact: true }).click();
  15 |     await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  16 |     await this.page.getByRole('button', { name: 'Continue' }).click();
  17 |   }
  18 | }*/
  19 | import { Page } from '@playwright/test';
  20 | 
  21 | 
  22 | 
  23 | export class LoginPage {
  24 | 
  25 |   constructor(private page: Page) {}
  26 | 
  27 |   async login(username: string, password: string) {
  28 | 
  29 |     const loginButton = this.page.locator('a[href*="auth-stage"]');
  30 |   await loginButton.waitFor({ state: 'attached', timeout: 15000 });
  31 | await loginButton.click({ force: true });
  32 | 
  33 | await this.page.getByLabel('Email address').fill(username);
  34 |  
  35 | 
  36 |     
  37 | 
  38 |     await this.page.locator('button._button-login-id').click();
  39 |     
> 40 |     await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
     |                                                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  41 |     
  42 | 
  43 | await this.page.getByRole('button', { name: 'Continue' }).click();
  44 |     //await this.page.click('#loginBtn');
  45 |   }
  46 | }
```