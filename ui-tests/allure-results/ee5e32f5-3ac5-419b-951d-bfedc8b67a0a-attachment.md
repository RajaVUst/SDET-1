# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\successful-payment-validation.spec.ts >> Successful payment validation with provided card
- Location: tests\checkout\successful-payment-validation.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Checkout')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByLabel('Checkout')

```

```yaml
- link "RM RetailMart":
  - /url: /
- heading "Sign In" [level=1]
- paragraph: Access your account to view orders and checkout faster.
- text: Email Address
- textbox "Email Address":
  - /placeholder: you@example.com
- text: Password
- textbox "Password":
  - /placeholder: Your password
- button "Sign In"
- paragraph: Demo Credentials
- button "Alice Johnson— alice@retailmart.com"
- button "Bob Williams— bob@retailmart.com"
- button "Carol Davis— carol@retailmart.com"
- paragraph:
  - text: New to RetailMart?
  - link "Create an account":
    - /url: /register
- paragraph:
  - text: No account?
  - link "Continue as Guest":
    - /url: /checkout
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | import { contactDetails } from '../test-data/contact';
  3  | import { address } from '../test-data/address';
  4  | import { payment } from '../test-data/payment';
  5  | 
  6  | export class CheckoutPage {
  7  |     constructor(private readonly page: Page) {}
  8  | 
  9  |     private fullNameInput = () => this.page.getByRole('textbox',{name: 'Jane Smith'});
  10 |     private emailInput = () => this.page.getByRole('textbox',{name: 'jane@example.com'});
  11 |     private phoneInput = () => this.page.getByRole('textbox',{name: '555-123-4567'});
  12 |     private streetInput = () => this.page.getByPlaceholder('123 Main Street');
  13 |     private cityInput = () => this.page.getByPlaceholder('Springfield');
  14 |     private zipInput = () => this.page.getByPlaceholder('62701');
  15 |     private countryInput = () => this.page.locator('input[value="USA"]');
  16 |     private paymentSuccessRadio = () => this.page.getByLabel(/payment success/i);
  17 |     private cardNumberInput = () => this.page.getByPlaceholder('1234 5678 9012 3456');
  18 |     private expiryInput = () => this.page.getByPlaceholder('MM/YY');
  19 |     private cvvInput = () => this.page.getByPlaceholder('123');
  20 | 
  21 |     async fillShippingDetails() {
  22 |         await this.fullNameInput().fill(payment.cardholderName);
  23 |         await this.emailInput().fill(contactDetails.email);
  24 |         await this.phoneInput().fill(contactDetails.phone);
  25 |         await this.streetInput().fill(address.street);
  26 |         await this.cityInput().fill(address.city);
  27 |         await this.page.locator('select').selectOption(address.state);
  28 |         await this.zipInput().fill(address.zip);
  29 |         await this.countryInput().fill(address.country);
  30 |     }
  31 | 
  32 |     async continueToPayment() {
  33 |         await this.page.getByRole('button', { name: /continue to payment/i }).click();
  34 |     }
  35 | 
  36 |     async fillPaymentDetails() {
  37 |         await this.paymentSuccessRadio().check();
  38 |         await this.fullNameInput().fill(payment.cardholderName);
  39 |         await this.cardNumberInput().fill(payment.cardNumber);
  40 |         await this.expiryInput().fill(payment.expiry);
  41 |         await this.cvvInput().fill(payment.cvv);
  42 |     }
  43 | 
  44 |     async verifyNoErrorMessages() {
  45 |         await expect(this.page.getByText(/error/i)).toHaveCount(0);
  46 |     }
  47 | 
  48 |     async placeOrder() {
  49 |         await this.page.getByRole('button', { name: /place order/i }).click();
  50 |     }
  51 | 
  52 |     async verifyCheckoutPage() {
  53 |         // await expect(this.page.getByRole('heading', { name: "Checkout"})).toBeVisible();
> 54 |         await expect(this.page.getByLabel('Checkout')).toBeVisible();
     |                                                        ^ Error: expect(locator).toBeVisible() failed
  55 |     }
  56 | 
  57 |     async verifyPaymentPage() {
  58 |         await expect(this.page.getByText('Payment')).toBeVisible();
  59 |     }
  60 | }
```