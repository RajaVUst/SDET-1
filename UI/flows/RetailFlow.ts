import { Page, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';

export class RetailFlow {
    private readonly productsPage: ProductsPage
    private readonly cartPage: CartPage
    private readonly checkoutPage: CheckoutPage
    private readonly paymentPage: PaymentPage

    constructor(private readonly page: Page) {
        this.productsPage = new ProductsPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.paymentPage = new PaymentPage(page);
    }

    async openProductsPage() {
        await this.productsPage.goto();
    }

    async searchAndAddProductToCart(query: string, productAddId: string, count: string) {
        await this.productsPage.search(query)
        await this.productsPage.addProductToCart(productAddId);
        await this.productsPage.assertCartCountToBe(count);
    }

    async openCart() {
        await this.productsPage.openCartPage();
    }

    async proceedToCheckout() {
        await this.cartPage.openCheckoutPage();
    }

    async fillCheckoutDetails(name: string, email: string, phone: string, shippingStreet: string, shippingCity: string, zip: string, state: string) {
        await this.checkoutPage.fillNameField(name);
        await this.checkoutPage.fillEmailField(email);
        await this.checkoutPage.fillPhoneField(phone);
        await this.checkoutPage.fillShippingStreetField(shippingStreet);
        await this.checkoutPage.fillShippingCityField(shippingCity);
        await this.checkoutPage.fillZipField(zip);
        await this.checkoutPage.selectState(state);
    }

    async proceedToPayment() {
        this.checkoutPage.openPaymentPage();
    }

    async fillPaymentDetails(cardName: string, cardNumber: string, expiry: string, cvv: string) {
        await this.paymentPage.fillCardNameField(cardName);
        await this.paymentPage.fillCardNumberField(cardNumber);
        await this.paymentPage.fillExpiryField(expiry);
        await this.paymentPage.fillCvvField(cvv);
    }

    async placeOrderAndValidatePaymentFailure() {
        await this.paymentPage.selectPaymentFailure();
        await this.paymentPage.clickPlaceOrderButton();
        await this.paymentPage.validatePaymentFailure();
    }
}