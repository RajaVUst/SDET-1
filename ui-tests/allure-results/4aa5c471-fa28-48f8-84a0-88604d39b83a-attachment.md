# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\tax-validation.spec.ts >> Tax validation on cart and checkout summary
- Location: tests\checkout\tax-validation.spec.ts:3:5

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
  1  | import { test, expect } from '../../fixtures/fixtures';
  2  | 
  3  | test('Tax validation on cart and checkout summary', async ({ productFlow, cartFlow, checkoutFlow, page }) => {
  4  |   await productFlow.openHome();
  5  |   await productFlow.openFirstProduct();
  6  |   await productFlow.verifyProductDetail();
  7  |   await productFlow.addToCart();
  8  | 
  9  |   await cartFlow.openCart();
  10 | 
  11 |   const subtotalText = await page.locator('text=Subtotal').locator('..').textContent();
  12 |   const subtotalValue = Number.parseFloat((subtotalText ?? '').replace(/[^0-9.]/g, ''));
  13 |   const expectedTax = subtotalValue * 0.085;
  14 |   const expectedTotal = subtotalValue + expectedTax;
  15 | 
  16 |   await expect(page.getByText('Tax (8.5%)')).toBeVisible();
> 17 |   await expect(page.getByText(`$${expectedTax.toFixed(2)}`)).toBeVisible();
     |                                                              ^ Error: expect(locator).toBeVisible() failed
  18 |   await expect(page.getByText('Total')).toBeVisible();
  19 |   await expect(page.getByText(`$${expectedTotal.toFixed(2)}`)).toBeVisible();
  20 | 
  21 |   await cartFlow.proceedToCheckout();
  22 |   await checkoutFlow.verifyCheckoutPage();
  23 |   await expect(page.getByText('Tax')).toBeVisible();
  24 |   await expect(page.getByText(`$${expectedTax.toFixed(2)}`)).toBeVisible();
  25 |   await expect(page.getByText(`$${expectedTotal.toFixed(2)}`)).toBeVisible();
  26 | });
  27 | 
```