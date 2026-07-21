import { test } from '../fixtures/retail';
import dotenv from 'dotenv';

dotenv.config();

const name = process.env.NAME!;
const email = process.env.EMAIL!;
const phone = process.env.PHONE!;
const shippingStreet = process.env.SHIPPING_STREET!;
const shippingCity = process.env.SHIPPING_CITY!;
const shippingZip = process.env.SHIPPING_ZIP!;
const shippingState = process.env.SHIPPING_STATE!;
const cardNumber = process.env.CARD_NUMBER!;
const expiry = process.env.EXPIRY!;
const cvv = process.env.CVV!;

test.describe("Final Assessment", () => {
    test("Add products to cart and validate payment failure", async ({ retail }) => {
        await retail.openProductsPage();
        await retail.searchAndAddProductToCart("laptop", "add-to-cart-prod-002", "1");
        await retail.searchAndAddProductToCart("coffee maker", "add-to-cart-prod-013", "2");
        await retail.searchAndAddProductToCart("book", "add-to-cart-prod-023", "3");
        await retail.openCart();
        await retail.proceedToCheckout();
        await retail.fillCheckoutDetails(name, email, phone, shippingStreet, shippingCity, shippingZip, shippingState);
        await retail.proceedToPayment();
        await retail.fillPaymentDetails(name, cardNumber, expiry, cvv);
        await retail.placeOrderAndValidatePaymentFailure();
    });
});
