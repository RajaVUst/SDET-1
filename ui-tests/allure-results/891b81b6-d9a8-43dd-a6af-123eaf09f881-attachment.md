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

Locator: getByText(/payment success/i)
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText(/payment success/i)

```

```yaml
- banner:
  - link "RM RetailMart":
    - /url: /
  - textbox "Search products, brands, categories..."
  - button "Search"
  - navigation:
    - link "Hello, Sign in Account":
      - /url: /login
    - link "Cart":
      - /url: /cart
      - img
      - text: Cart
  - navigation:
    - link "Electronics":
      - /url: /?category=Electronics
    - link "Clothing":
      - /url: /?category=Clothing
    - link "Home & Kitchen":
      - /url: /?category=Home%20%26%20Kitchen
    - link "Sports & Outdoors":
      - /url: /?category=Sports%20%26%20Outdoors
    - link "Books":
      - /url: /?category=Books
    - link "Toys & Games":
      - /url: /?category=Toys%20%26%20Games
- main:
  - img
  - heading "Order Confirmed!" [level=1]
  - paragraph:
    - text: Thank you,
    - strong: Jane Smith
    - text: "! Your order has been placed successfully."
  - paragraph: Your Order Number
  - paragraph: RM-20260721-59258
  - paragraph: Placed on July 21, 2026
  - text: Processing
  - heading "Items Ordered" [level=2]
  - img "ProSound Wireless Headphones"
  - paragraph: ProSound Wireless Headphones
  - paragraph: "Qty: 1"
  - paragraph: $89.99
  - heading "Payment" [level=3]
  - text: Subtotal $89.99 Tax $7.65 Shipping FREE Total $97.64
  - paragraph: Credit Card ending in 2371
  - heading "Shipping To" [level=3]
  - paragraph: Jane Smith
  - paragraph: Trivandrum
  - paragraph: Kerala, ID 68998
  - paragraph: India
  - link "Continue Shopping":
    - /url: /
- contentinfo:
  - heading "RetailMart" [level=4]
  - paragraph: Demo e-commerce site for QA automation practice. All transactions are simulated — no real payments are processed.
  - heading "Shop" [level=4]
  - list:
    - listitem:
      - link "Electronics":
        - /url: /?category=Electronics
    - listitem:
      - link "Clothing":
        - /url: /?category=Clothing
    - listitem:
      - link "Home & Kitchen":
        - /url: /?category=Home & Kitchen
    - listitem:
      - link "Sports & Outdoors":
        - /url: /?category=Sports & Outdoors
    - listitem:
      - link "Books":
        - /url: /?category=Books
    - listitem:
      - link "Toys & Games":
        - /url: /?category=Toys & Games
  - heading "Account" [level=4]
  - list:
    - listitem:
      - link "Sign In":
        - /url: /login
    - listitem:
      - link "Order History":
        - /url: /orders
    - listitem:
      - link "Shopping Cart":
        - /url: /cart
  - heading "Help" [level=4]
  - list:
    - listitem: Shipping Policy (Demo)
    - listitem: Returns Policy (Demo)
    - listitem: Contact Support (Demo)
    - listitem: FAQ (Demo)
  - text: © 2026 RetailMart — Automation Testing Practice Site. Not a real store.
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | 
  3  | export class OrderPage {
  4  |     constructor(private readonly page: Page) {}
  5  | 
  6  |     async verifySuccess() {
> 7  |         await expect(this.page.getByText(/payment success/i)).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  8  |         await expect(this.page.getByText(/order confirmed/i)).toBeVisible();
  9  |         await expect(this.page.locator('body')).toContainText('ProSound Wireless Headphones');
  10 |         await expect(this.page.locator('body')).toContainText('$89.99');
  11 |         await expect(this.page.locator('body')).toContainText('$97.64');
  12 |     }
  13 | 
  14 |     async verifyOrderNumberGenerated() {
  15 |         const orderNumber = this.page.locator('body').filter({ hasText: /order/i }).first();
  16 |         await expect(orderNumber).toBeVisible();
  17 |     }
  18 | }
```