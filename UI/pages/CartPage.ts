import { test, Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private readonly page: Page) {}

    async openCheckoutPage() {
        await this.page.getByTestId('checkout-button').click();
    }
}