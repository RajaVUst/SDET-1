import { test, Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private readonly page: Page) {}

    async fillNameField(name: string) {
        await this.page.getByTestId('guest-name-input').click();
        await this.page.getByTestId('guest-name-input').fill(name);
    }

    async fillEmailField(email: string) {
        await this.page.getByTestId('guest-email-input').click();
        await this.page.getByTestId('guest-email-input').fill(email);
    }

    async fillPhoneField(phone: string) {
        await this.page.getByTestId('guest-phone-input').click();
        await this.page.getByTestId('guest-phone-input').fill(phone);
    }

    async fillShippingStreetField(shippingStreet: string) {
        await this.page.getByTestId('shipping-street-input').click();
        await this.page.getByTestId('shipping-street-input').fill(shippingStreet);
    }

    async fillShippingCityField(shippingCity: string) {
        await this.page.getByTestId('shipping-city-input').click();
        await this.page.getByTestId('shipping-city-input').fill(shippingCity);
    }

    async fillZipField(zip: string) {
        await this.page.getByTestId('shipping-zip-input').click();
        await this.page.getByTestId('shipping-zip-input').fill(zip);
    }

    async selectState(state: string) {
        await this.page.getByTestId('shipping-state-select').selectOption(state);
    }

    async openPaymentPage() {
        await this.page.getByTestId('continue-to-payment-button').click();
    }
}