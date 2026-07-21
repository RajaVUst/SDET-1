import { test, expect } from '../loggingFixture/artifacts';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';

import { AddtoCartFlow } from '../Flows/AddtoCartFlow';

import {screenshot} from '../utils/Functions'

import cartitems from '../test-data/cart-items.json'

import {locators} from '../Locators/locators'

import checkoutdetails from '../test-data/checkout-details.json'
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';

test('Payment failure', async ({ page,log, evidence },testInfo) => {

    let locatorclass = new locators()


    log.info("Adding items to cart")

    let addtocartflow = new AddtoCartFlow(page,log,evidence)

    await addtocartflow.AddItemsToCart()

    log.info("Item added to cart")

    let cartpage = new CartPage(page,log,evidence)

    log.info("Going to cart page")

    await cartpage.goto()

    log.info("Taking screenshot of cartpage")

    await screenshot(page,testInfo,"CartPage")

    log.info("Proceeding to checkout")

    await cartpage.proceed()

    let checkoutpage = new CheckoutPage(page,log,evidence)

    log.info("Filling checkout details")
    await checkoutpage.fillDetails()

    await screenshot(page,testInfo,"CheckoutPage")

    log.info("Proceeding to payment")

    await checkoutpage.continueToPayment()

    let paymentPage = new PaymentPage(page,log,evidence)

     log.info("Filling payment details")

    await paymentPage.fillDetails()

    log.info("Turning on failure toggle")

    await paymentPage.toggleFailure()

    log.info("Trying to place order")

    await paymentPage.placeOrder()

    log.info("Taking screenshot of Failed Payment msg")

    await screenshot(page,testInfo,"Failed_Payment")

    let errormsg = await locatorclass.paymentGeneralError(page)

    await expect(errormsg).toBeVisible()

    await expect(errormsg).toHaveText(/payment processing error/i)
    
});

