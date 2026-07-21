# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\tax_validation.spec.ts >> Tax validation on cart and checkout summary
- Location: tests\checkout\tax_validation.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('$16.15')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('$16.15')

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
    - link "1 Cart":
      - /url: /cart
      - img
      - text: 1 Cart
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
  - heading "Shopping Cart(1 item)" [level=1]
  - text: ✓ You qualify for
  - strong: free shipping!
  - link "ProSound Wireless Headphones":
    - /url: /product/prod-001
    - img "ProSound Wireless Headphones"
  - link "ProSound Wireless Headphones":
    - /url: /product/prod-001
  - paragraph: ProSound
  - button "−"
  - text: "1"
  - button "+"
  - button "Remove"
  - paragraph: $89.99
  - link "← Continue Shopping":
    - /url: /
  - heading "Order Summary" [level=2]
  - text: Subtotal (1 items) $89.99 Tax (8.5%) $7.65 Shipping FREE Total $97.64
  - button "Proceed to Checkout"
  - paragraph: Secure checkout — demo only, no real charges
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
  3  | export class CartPage {
  4  |     constructor(private readonly page: Page) {}
  5  | 
  6  |     private cartHeading = () => this.page.getByRole('heading', { name: /Shopping Cart/i });
  7  |     private proceedToCheckoutButton = () => this.page.locator(`//*[@data-testid='checkout-button']`);
  8  |     private subtotalValue = () => this.page.locator('text=Subtotal').locator('..');
  9  |     private taxValue = () => this.page.locator('text=Tax').locator('..');
  10 |     private totalValue = () => this.page.locator('text=Total').locator('..');
  11 | 
  12 |     async openCart() {
  13 |         await this.page.goto('/cart');
  14 |         await expect(this.cartHeading()).toBeVisible();
  15 |     }
  16 | 
  17 |     async proceedToCheckout() {
  18 |         await this.proceedToCheckoutButton().click();
  19 |     }
  20 | 
  21 |     async verifyTaxSummary() {
  22 |         const subtotalText = await this.subtotalValue().textContent();
  23 |         const subtotalValue = Number.parseFloat((subtotalText ?? '').replace(/[^0-9.]/g, ''));
  24 |         const expectedTax = subtotalValue * 0.085;
  25 |         const expectedTotal = subtotalValue + expectedTax;
  26 | 
  27 |         console.log (subtotalText);
  28 |         console.log (subtotalValue);
  29 |         console.log (expectedTax.toFixed(2));
  30 |         console.log (expectedTotal.toFixed(2));
  31 | 
  32 |         await expect(this.page.getByText(/tax/i)).toBeVisible();
> 33 |         await expect(this.page.getByText(`$${expectedTax.toFixed(2)}`)).toBeVisible();
     |                                                                         ^ Error: expect(locator).toBeVisible() failed
  34 |         await expect(this.page.getByText(/total/i)).toBeVisible();
  35 |         await expect(this.page.getByText(`$${expectedTotal.toFixed(2)}`)).toBeVisible();
  36 |     }
  37 | }
```