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

Locator: getByRole('heading', { name: /checkout/i })
Expected: visible
Error: strict mode violation: getByRole('heading', { name: /checkout/i }) resolved to 2 elements:
    1) <h1 class="text-2xl font-bold text-gray-900 mb-6">Checkout</h1> aka getByRole('heading', { name: 'Checkout', exact: true })
    2) <h2 class="font-bold text-gray-900 mb-4">How would you like to checkout?</h2> aka getByRole('heading', { name: 'How would you like to' })

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: /checkout/i })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "RM RetailMart" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e7]: RM
        - text: RetailMart
      - generic [ref=e8]:
        - textbox "Search products, brands, categories..." [ref=e9]
        - button "Search" [ref=e10]
      - navigation [ref=e11]:
        - link "Hello, Sign in Account" [ref=e12] [cursor=pointer]:
          - /url: /login
          - generic [ref=e13]: Hello, Sign in
          - generic [ref=e14]: Account
        - link "1 Cart" [ref=e15] [cursor=pointer]:
          - /url: /cart
          - img [ref=e16]
          - generic [ref=e18]: "1"
          - generic [ref=e19]: Cart
    - navigation [ref=e20]:
      - generic [ref=e21]:
        - link "Electronics" [ref=e22] [cursor=pointer]:
          - /url: /?category=Electronics
        - link "Clothing" [ref=e23] [cursor=pointer]:
          - /url: /?category=Clothing
        - link "Home & Kitchen" [ref=e24] [cursor=pointer]:
          - /url: /?category=Home%20%26%20Kitchen
        - link "Sports & Outdoors" [ref=e25] [cursor=pointer]:
          - /url: /?category=Sports%20%26%20Outdoors
        - link "Books" [ref=e26] [cursor=pointer]:
          - /url: /?category=Books
        - link "Toys & Games" [ref=e27] [cursor=pointer]:
          - /url: /?category=Toys%20%26%20Games
  - main [ref=e28]:
    - generic [ref=e29]:
      - heading "Checkout" [level=1] [ref=e30]
      - generic [ref=e31]:
        - generic [ref=e32]: 1. Shipping
        - generic [ref=e33]: ›
        - generic [ref=e34]: 2. Payment
        - generic [ref=e35]: ›
        - generic [ref=e36]: 3. Confirmation
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic [ref=e39]:
            - heading "How would you like to checkout?" [level=2] [ref=e40]
            - generic [ref=e41]:
              - button "Guest Checkout No account needed" [ref=e42]:
                - paragraph [ref=e43]: Guest Checkout
                - paragraph [ref=e44]: No account needed
              - button "Sign In Use your account" [ref=e45]:
                - paragraph [ref=e46]: Sign In
                - paragraph [ref=e47]: Use your account
          - generic [ref=e48]:
            - heading "Contact Information" [level=2] [ref=e49]
            - generic [ref=e50]:
              - generic [ref=e51]:
                - generic [ref=e52]: Full Name *
                - textbox "Jane Smith" [ref=e53]
              - generic [ref=e54]:
                - generic [ref=e55]: Email Address *
                - textbox "jane@example.com" [ref=e56]
              - generic [ref=e57]:
                - generic [ref=e58]: Phone Number *
                - textbox "555-123-4567" [ref=e59]
          - generic [ref=e60]:
            - heading "Shipping Address" [level=2] [ref=e61]
            - generic [ref=e62]:
              - generic [ref=e63]:
                - generic [ref=e64]: Street Address *
                - textbox "123 Main Street" [ref=e65]
              - generic [ref=e66]:
                - generic [ref=e67]:
                  - generic [ref=e68]: City *
                  - textbox "Springfield" [ref=e69]
                - generic [ref=e70]:
                  - generic [ref=e71]: State *
                  - combobox [ref=e72]:
                    - option "Select state" [selected]
                    - option "AL"
                    - option "AK"
                    - option "AZ"
                    - option "AR"
                    - option "CA"
                    - option "CO"
                    - option "CT"
                    - option "DE"
                    - option "FL"
                    - option "GA"
                    - option "HI"
                    - option "ID"
                    - option "IL"
                    - option "IN"
                    - option "IA"
                    - option "KS"
                    - option "KY"
                    - option "LA"
                    - option "ME"
                    - option "MD"
                    - option "MA"
                    - option "MI"
                    - option "MN"
                    - option "MS"
                    - option "MO"
                    - option "MT"
                    - option "NE"
                    - option "NV"
                    - option "NH"
                    - option "NJ"
                    - option "NM"
                    - option "NY"
                    - option "NC"
                    - option "ND"
                    - option "OH"
                    - option "OK"
                    - option "OR"
                    - option "PA"
                    - option "RI"
                    - option "SC"
                    - option "SD"
                    - option "TN"
                    - option "TX"
                    - option "UT"
                    - option "VT"
                    - option "VA"
                    - option "WA"
                    - option "WV"
                    - option "WI"
                    - option "WY"
              - generic [ref=e73]:
                - generic [ref=e74]:
                  - generic [ref=e75]: ZIP Code *
                  - textbox "62701" [ref=e76]
                - generic [ref=e77]:
                  - generic [ref=e78]: Country
                  - textbox [ref=e79]: USA
          - button "Continue to Payment →" [ref=e80]
        - generic [ref=e82]:
          - heading "Order Summary" [level=2] [ref=e83]
          - generic [ref=e85]:
            - img "ProSound Wireless Headphones" [ref=e86]
            - generic [ref=e87]:
              - paragraph [ref=e88]: ProSound Wireless Headphones
              - paragraph [ref=e89]: "Qty: 1"
            - generic [ref=e90]: $89.99
          - generic [ref=e91]:
            - generic [ref=e92]:
              - generic [ref=e93]: Subtotal (1 items)
              - generic [ref=e94]: $89.99
            - generic [ref=e95]:
              - generic [ref=e96]: Tax
              - generic [ref=e97]: $7.65
            - generic [ref=e98]:
              - generic [ref=e99]: Shipping
              - generic [ref=e100]: FREE
            - generic [ref=e101]:
              - generic [ref=e102]: Total
              - generic [ref=e103]: $97.64
  - contentinfo [ref=e104]:
    - generic [ref=e105]:
      - generic [ref=e106]:
        - heading "RetailMart" [level=4] [ref=e107]
        - paragraph [ref=e108]: Demo e-commerce site for QA automation practice. All transactions are simulated — no real payments are processed.
      - generic [ref=e109]:
        - heading "Shop" [level=4] [ref=e110]
        - list [ref=e111]:
          - listitem [ref=e112]:
            - link "Electronics" [ref=e113] [cursor=pointer]:
              - /url: /?category=Electronics
          - listitem [ref=e114]:
            - link "Clothing" [ref=e115] [cursor=pointer]:
              - /url: /?category=Clothing
          - listitem [ref=e116]:
            - link "Home & Kitchen" [ref=e117] [cursor=pointer]:
              - /url: /?category=Home & Kitchen
          - listitem [ref=e118]:
            - link "Sports & Outdoors" [ref=e119] [cursor=pointer]:
              - /url: /?category=Sports & Outdoors
          - listitem [ref=e120]:
            - link "Books" [ref=e121] [cursor=pointer]:
              - /url: /?category=Books
          - listitem [ref=e122]:
            - link "Toys & Games" [ref=e123] [cursor=pointer]:
              - /url: /?category=Toys & Games
      - generic [ref=e124]:
        - heading "Account" [level=4] [ref=e125]
        - list [ref=e126]:
          - listitem [ref=e127]:
            - link "Sign In" [ref=e128] [cursor=pointer]:
              - /url: /login
          - listitem [ref=e129]:
            - link "Order History" [ref=e130] [cursor=pointer]:
              - /url: /orders
          - listitem [ref=e131]:
            - link "Shopping Cart" [ref=e132] [cursor=pointer]:
              - /url: /cart
      - generic [ref=e133]:
        - heading "Help" [level=4] [ref=e134]
        - list [ref=e135]:
          - listitem [ref=e136]: Shipping Policy (Demo)
          - listitem [ref=e137]: Returns Policy (Demo)
          - listitem [ref=e138]: Contact Support (Demo)
          - listitem [ref=e139]: FAQ (Demo)
    - generic [ref=e140]: © 2026 RetailMart — Automation Testing Practice Site. Not a real store.
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
> 53 |         await expect(this.page.getByRole('heading', { name: /checkout/i })).toBeVisible();
     |                                                                             ^ Error: expect(locator).toBeVisible() failed
  54 |     }
  55 | 
  56 |     async verifyPaymentPage() {
  57 |         await expect(this.page.getByText('Payment')).toBeVisible();
  58 |     }
  59 | }
```