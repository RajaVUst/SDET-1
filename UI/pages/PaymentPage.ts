import { test, Page, expect } from '@playwright/test';

export class PaymentPage {
    constructor(private readonly page: Page) {}

    async selectPaymentFailure() {
        await this.page.getByTestId('payment-scenario-failure').check();
    }

    async fillCardNameField(cardName: string) {
        await this.page.getByTestId('payment-card-name').click();
        await this.page.getByTestId('payment-card-name').fill(cardName);
    }

    async fillCardNumberField(cardNumber: string) {
        await this.page.getByTestId('payment-card-number').click();
        await this.page.getByTestId('payment-card-number').fill(cardNumber);
    }

    async fillExpiryField(expiry: string) {
        await this.page.getByTestId('payment-expiry').click();
        await this.page.getByTestId('payment-expiry').fill(expiry);
    }

    async fillCvvField(cvv: string) {
        await this.page.getByTestId('payment-cvv').click();
        await this.page.getByTestId('payment-cvv').fill(cvv);
    }

    async clickPlaceOrderButton() {
        await this.page.getByTestId('place-order-button').click();
    }

    async validatePaymentFailure() {
        await expect(this.page.getByTestId('payment-general-error')).toHaveText("Your card was declined. Please use a different card or contact your bank.");
    }
}