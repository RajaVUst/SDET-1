import { test, Page, expect } from '@playwright/test';

export class ProductsPage {
    constructor(private readonly page: Page) {}

    async goto() {
        await this.page.goto("/");
    }

    async search(query: string) {
        await this.page.getByTestId('search-input').click();
        await this.page.getByTestId('search-input').fill(query);
        await this.page.getByTestId('search-button').click();
    }

    async addProductToCart(productAddId: string) {
        await this.page.getByTestId(productAddId).click();
    }

    async assertCartCountToBe(count: string) {
        await expect(this.page.getByTestId('cart-count')).toHaveText(count);
    }

    async openCartPage() {
        await this.page.getByTestId('cart-link').click();
    }
}