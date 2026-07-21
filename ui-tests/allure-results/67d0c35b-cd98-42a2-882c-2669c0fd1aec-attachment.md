# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\successful-payment-validation.spec.ts >> Successful payment validation with provided card
- Location: tests\checkout\successful-payment-validation.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: /cart/i }) resolved to 2 elements:
    1) <a href="/cart" data-discover="true" data-testid="cart-link" class="flex items-center gap-1 text-white hover:text-yellow-300 transition-colors relative">…</a> aka getByTestId('cart-link')
    2) <a href="/cart" class="hover:text-white transition-colors">Shopping Cart</a> aka getByRole('link', { name: 'Shopping Cart' })

Call log:
  - waiting for getByRole('link', { name: /cart/i })

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
      - heading "Shopping Cart(1 item)" [level=1] [ref=e30]:
        - text: Shopping Cart
        - generic [ref=e31]: (1 item)
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - text: ✓ You qualify for
            - strong [ref=e35]: free shipping!
          - generic [ref=e37]:
            - link "ProSound Wireless Headphones" [ref=e38] [cursor=pointer]:
              - /url: /product/prod-001
              - img "ProSound Wireless Headphones" [ref=e39]
            - generic [ref=e40]:
              - link "ProSound Wireless Headphones" [ref=e41] [cursor=pointer]:
                - /url: /product/prod-001
              - paragraph [ref=e42]: ProSound
              - generic [ref=e43]:
                - generic [ref=e44]:
                  - button "−" [ref=e45]
                  - generic [ref=e46]: "1"
                  - button "+" [ref=e47]
                - button "Remove" [ref=e48]
            - paragraph [ref=e50]: $89.99
          - link "← Continue Shopping" [ref=e52] [cursor=pointer]:
            - /url: /
        - generic [ref=e54]:
          - heading "Order Summary" [level=2] [ref=e55]
          - generic [ref=e56]:
            - generic [ref=e57]:
              - generic [ref=e58]: Subtotal (1 items)
              - generic [ref=e59]: $89.99
            - generic [ref=e60]:
              - generic [ref=e61]: Tax (8.5%)
              - generic [ref=e62]: $7.65
            - generic [ref=e63]:
              - generic [ref=e64]: Shipping
              - generic [ref=e65]: FREE
          - generic [ref=e66]:
            - generic [ref=e67]: Total
            - generic [ref=e68]: $97.64
          - button "Proceed to Checkout" [ref=e69]
          - paragraph [ref=e70]: Secure checkout — demo only, no real charges
  - contentinfo [ref=e71]:
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "RetailMart" [level=4] [ref=e74]
        - paragraph [ref=e75]: Demo e-commerce site for QA automation practice. All transactions are simulated — no real payments are processed.
      - generic [ref=e76]:
        - heading "Shop" [level=4] [ref=e77]
        - list [ref=e78]:
          - listitem [ref=e79]:
            - link "Electronics" [ref=e80] [cursor=pointer]:
              - /url: /?category=Electronics
          - listitem [ref=e81]:
            - link "Clothing" [ref=e82] [cursor=pointer]:
              - /url: /?category=Clothing
          - listitem [ref=e83]:
            - link "Home & Kitchen" [ref=e84] [cursor=pointer]:
              - /url: /?category=Home & Kitchen
          - listitem [ref=e85]:
            - link "Sports & Outdoors" [ref=e86] [cursor=pointer]:
              - /url: /?category=Sports & Outdoors
          - listitem [ref=e87]:
            - link "Books" [ref=e88] [cursor=pointer]:
              - /url: /?category=Books
          - listitem [ref=e89]:
            - link "Toys & Games" [ref=e90] [cursor=pointer]:
              - /url: /?category=Toys & Games
      - generic [ref=e91]:
        - heading "Account" [level=4] [ref=e92]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "Sign In" [ref=e95] [cursor=pointer]:
              - /url: /login
          - listitem [ref=e96]:
            - link "Order History" [ref=e97] [cursor=pointer]:
              - /url: /orders
          - listitem [ref=e98]:
            - link "Shopping Cart" [ref=e99] [cursor=pointer]:
              - /url: /cart
      - generic [ref=e100]:
        - heading "Help" [level=4] [ref=e101]
        - list [ref=e102]:
          - listitem [ref=e103]: Shipping Policy (Demo)
          - listitem [ref=e104]: Returns Policy (Demo)
          - listitem [ref=e105]: Contact Support (Demo)
          - listitem [ref=e106]: FAQ (Demo)
    - generic [ref=e107]: © 2026 RetailMart — Automation Testing Practice Site. Not a real store.
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | 
  3  | export class CartPage {
  4  |     constructor(private readonly page: Page) {}
  5  | 
  6  |     private cartHeading = () => this.page.getByRole('heading', { name: /Shopping Cart/i });
  7  |     private cartLink = () => this.page.getByRole('link', { name: /cart/i });
  8  |     private proceedToCheckoutButton = () => this.page.getByRole('button', { name: /proceed to checkout/i });
  9  | 
  10 |     async openCart() {
  11 |         await this.page.goto('/cart');
  12 |         await expect(this.cartHeading()).toBeVisible();
> 13 |         await this.cartLink().click();
     |                               ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: /cart/i }) resolved to 2 elements:
  14 |     }
  15 | 
  16 |     async proceedToCheckout() {
  17 |         await this.proceedToCheckoutButton().click();
  18 |     }
  19 | }
```