import { expect, Page } from '@playwright/test';

export class CartPage {
    constructor(private readonly page: Page) {}

    private cartHeading = () => this.page.getByRole('heading', { name: /Shopping Cart/i });
    private proceedToCheckoutButton = () => this.page.locator(`//*[@data-testid='checkout-button']`);
    private subtotalRow = () => this.page.locator('text=Subtotal').locator('..');
    private taxRow = () => this.page.locator('text=Tax').locator('..');
    private totalRow = () => this.page.locator('text=Total').locator('..');
    private subtotalAmount = () => this.subtotalRow().locator('text=/\$[0-9,]+(\.[0-9]{2})?/').first();
    private taxAmount = () => this.page.getByTestId('cart-tax');
    private totalAmount = () => this.page.getByTestId('cart-total');

    async openCart() {
        await this.page.goto('/cart');
        await expect(this.cartHeading()).toBeVisible();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton().click();
    }

    async verifyTaxSummary() {
        const subtotalText = await this.subtotalAmount().textContent();
        const subtotalValue = Number.parseFloat((subtotalText ?? '').replace(/[^0-9.]/g, ''));
        const expectedTax = Number((subtotalValue * 0.085).toFixed(2));
        const expectedTotal = Number((subtotalValue + expectedTax).toFixed(2));

        await expect(this.page.getByText(/tax/i)).toBeVisible();
        await expect(this.page.getByText(`$${expectedTax.toFixed(2)}`)).toBeVisible();
        await expect(this.page.getByText(/total/i)).toBeVisible();
        await expect(this.page.getByText(`$${expectedTotal.toFixed(2)}`)).toBeVisible();
    }
}