# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge-cases\empty-cart.spec.ts >> Checkout With Empty Cart
- Location: tests\edge-cases\empty-cart.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: /place order/i })

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
  17 |     private cardNumberInput = () => this.page.getByTestId('payment-card-number');
  18 |     private expiryInput = () => this.page.getByPlaceholder('MM/YY');
  19 |     private cvvInput = () => this.page.getByTestId('payment-cvv');
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
  40 |         await this.expiryInput().pressSequentially(payment.expiry);
  41 |         await this.cvvInput().fill(payment.cvv);
  42 |     }
  43 | 
  44 |     async verifyNoErrorMessages() {
  45 |         await expect(this.page.getByText(/error/i)).toHaveCount(0);
  46 |     }
  47 | 
  48 |     async placeOrder() {
> 49 |         await this.page.getByRole('button', { name: /place order/i }).click();
     |                                                                       ^ Error: locator.click: Target page, context or browser has been closed
  50 |     }
  51 | 
  52 |     async verifyCheckoutPage() {
  53 |         await expect(this.page.getByRole('heading', { name: "Checkout", level: 1})).toBeVisible();
  54 |     }
  55 | 
  56 |     async verifyPaymentPage() {
  57 |         await expect(this.page.getByRole('heading', { name: "Payment", level: 1})).toBeVisible();
  58 |     }
  59 | }
```