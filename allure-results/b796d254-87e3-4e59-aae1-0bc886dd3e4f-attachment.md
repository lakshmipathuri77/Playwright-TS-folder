# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase.spec.ts >> test
- Location: tests\testcase.spec.ts:5:5

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
              - textbox "Email address" [ref=e21]: patrick.flanagan@alliedirishbank.mailosaur.net
            - generic [ref=e22]:
              - img "captcha" [ref=e24]
              - generic [ref=e26]:
                - generic [ref=e27]: Enter the code shown above *
                - textbox "Enter the code shown above" [active] [ref=e28]: 84BDL5
          - paragraph [ref=e29]:
            - link "Can't log in to your account?" [ref=e30] [cursor=pointer]:
              - /url: /u/login/password-reset-start/Username-Password-Authentication?state=hKFo2SAtdXJMdGxXS0R3bE40R3FzRzFGNFF5QUVzUFZZZ3ZoR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHhBSzFQY0kwckEyNlFVeXpYT1J1dzZ1eDdtMExISk11o2NpZNkgc1VkM1IxV3VyWUR5UlV5T0JISEd6amJWcnptR3JLSEI
          - button "Continue" [ref=e32] [cursor=pointer]
        - paragraph [ref=e33]:
          - text: "For Partners, Customers and Guests:"
          - link "Register Now!" [ref=e34] [cursor=pointer]:
            - /url: https://sso-stage.hitachivantara.com/register?client_id=sUd3R1WurYDyRUyOBHHGzjbVrzmGrKHB&redirect=https://support-stage.hitachivantara.com
          - text: Need help?
          - link "Partner |" [ref=e35] [cursor=pointer]:
            - /url: https://sso-stage.hitachivantara.com/partnerSupport.html
          - link "Customer/Guest |" [ref=e36] [cursor=pointer]:
            - /url: https://support.hitachivantara.com/en_us/contact-us.html
          - link "Employee" [ref=e37] [cursor=pointer]:
            - /url: https://sso.hitachivantara.com/en_us/contact-us-employee.html
      - generic [ref=e39]: Or
      - button "Continue with a passkey" [ref=e42] [cursor=pointer]:
        - generic [ref=e44]: Continue with a passkey
      - generic [ref=e46]:
        - button "Connection icon Single Sign-On - Hitachi Group" [ref=e48] [cursor=pointer]:
          - img "Connection icon" [ref=e49]
          - generic [ref=e50]: Single Sign-On - Hitachi Group
        - button "Connection icon Single Sign-On - Hitachi Vantara, Hitachi Federal" [ref=e52] [cursor=pointer]:
          - img "Connection icon" [ref=e53]
          - generic [ref=e54]: Single Sign-On - Hitachi Vantara, Hitachi Federal
        - button "Connection icon Single Sign-On - Hitachi Digital" [ref=e56] [cursor=pointer]:
          - img "Connection icon" [ref=e57]
          - generic [ref=e58]: Single Sign-On - Hitachi Digital
        - button "Connection icon Single Sign-On - Hitachi Digital Services" [ref=e60] [cursor=pointer]:
          - img "Connection icon" [ref=e61]
          - generic [ref=e62]: Single Sign-On - Hitachi Digital Services
```

# Test source

```ts
  1   | import { test, expect, Locator } from '@playwright/test';
  2   |  
  3   |  
  4   |  
  5   | test('test', async ({ page }) => {
  6   |  
  7   |  await page.goto('https://support-stage.hitachivantara.com/');
  8   |  
  9   |  await page.getByRole('link', { name: 'Log In' }).click();
  10  |  
  11  |  await page.getByRole('textbox', { name: 'Email address' }).click();
  12  |  
  13  |  await page.getByText('Welcome Log in to continue to').click();
  14  |  
  15  |  await page.getByRole('textbox', { name: 'Email address' }).click();
  16  |  
  17  |  await page.getByRole('textbox', { name: 'Email address' }).fill('patrick.flanagan@alliedirishbank.mailosaur.net');
  18  |  
  19  |  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  20  |  
> 21  |  await page.getByRole('textbox', { name: 'Password' }).fill('Hitachi#123!');
      |                                                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  22  |  
  23  |  await page.getByRole('button', { name: 'Continue' }).click();
  24  |  
  25  |  await page.locator('button').filter({ hasText: 'My Account' }).first().click();
  26  |  
  27  |  await page.getByRole('link', { name: 'My Cases' }).click();
  28  |  
  29  |  await page.getByRole('button', { name: 'New Case' }).click();
  30  |  
  31  |  //await page.getByRole('button', { name: 'Product Support Create a case' }).click();
  32  |  const createCaseButton = page.getByRole('button', { name: 'Product Support Create a case' });
  33  |  await expect(createCaseButton).toBeVisible({ timeout: 10000 }); // Wait specifically for visibility
  34  |  await createCaseButton.click();
  35  |  
  36  |  await page.getByRole('searchbox', { name: 'Search by product name or' }).fill('vsp');
  37  |  
  38  |  await page.getByLabel('02i1J000005OnXZQA0 -').getByText('Virtual Storage Platform (VSP)').click();
  39  |  
  40  |  
  41  |  await page.getByRole('button', { name: 'Next' }).click();
  42  |  
  43  |  await page.getByRole('button', { name: 'Hardware For issues related' }).click();
  44  |  
  45  |  await page.getByRole('textbox', { name: 'Enter a brief summary of your' }).click();
  46  |  
  47  |  await page.getByRole('textbox', { name: 'Enter a brief summary of your' }).fill('test Hardware case');
  48  |  
  49  |  await page.getByRole('textbox', { name: 'Provide details, steps to' }).click();
  50  |  
  51  |  await page.getByRole('textbox', { name: 'Provide details, steps to' }).fill('testing creating portal support case creation');
  52  |  
  53  |  await page.locator('c-sc-generic-dropdown-field').filter({ hasText: 'Does this issue impact your' }).getByLabel('Please select an option').click();
  54  |  
  55  |  await page.getByText('Minimal impact (Non-critical');
  56  |  
  57  |  await page.locator('c-sc-generic-dropdown-field').filter({ hasText: 'Is your production' }).getByLabel('Please select an option').click();
  58  |  
  59  |  await page.locator('div').filter({ hasText: /^Yes$/ }).click();
  60  |  
  61  |  //await page.getByRole('button', { name: 'Please select an option' }).click();
  62  |  
  63  | // 1. Open the dropdown
  64  | const dropdown = page.locator('c-sc-generic-dropdown-field')
  65  |   .filter({ hasText: 'Does this issue impact your' });
  66  |  
  67  | await dropdown.getByRole('button', { name: 'Please select an option' }).click();
  68  |  
  69  | // 2. Select the specific option (adjust 'Option Name' to your target value)
  70  | // Custom dropdowns often use role="option" or role="listitem" for their items
  71  | await page.getByRole('option', { name: 'Minimal impact (Non-critical issue)', exact: true }).click();
  72  |  
  73  | // 3. Optional: Verify the selection was saved
  74  | await expect(dropdown).toContainText('Minimal impact (Non-critical issue)');
  75  |  
  76  |  
  77  | // await page.getByText('Some', { exact: true }).click();
  78  |  await page.getByText('Some', { exact: true }).dispatchEvent('click');
  79  |  
  80  |  await page.getByRole('button', { name: 'Next' }).click();
  81  |  await page.getByRole('button', { name: 'Please select an option' }).click();
  82  |  
  83  |  //await page.getByText('24x7').click();
  84  | await page.getByText('24x7').click({ timeout: 60000 });
  85  |  
  86  |  
  87  |  await page.getByRole('button', { name: 'Next' }).click();
  88  |  
  89  |  await page.getByRole('button', { name: 'Submit' }).press('ArrowDown');
  90  |  
  91  |  await page.getByRole('button', { name: 'Submit' }).press('ArrowDown');
  92  |  
  93  | // After clicking Submit
  94  | await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
  95  | await page.getByRole('button', { name: 'Submit' }).click();
  96  | 
  97  | // 1. Wait for the "creating case" loading message
  98  | const loading = page.getByText(/Please wait while we are creating a case/i);
  99  | await loading.waitFor({ state: 'visible', timeout: 60000 });
  100 | 
  101 | // 2. Wait for the loading message to disappear
  102 | await loading.waitFor({ state: 'detached', timeout: 120000 });
  103 | 
  104 | // 3. Now wait for the confirmation message
  105 | const confirmation = page.getByText(/Your Case Number is/i);
  106 | await confirmation.waitFor({ state: 'visible', timeout: 120000 });
  107 | 
  108 | // Optional: extract the case number
  109 | const text = await confirmation.innerText();
  110 | const caseNumber = text.match(/\d+/)?.[0];
  111 | console.log('New Case Number:', caseNumber);
  112 | });
  113 | 
```