import { test, expect } from '../loggingFixture/artifacts';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';

import {screenshot} from '../utils/Functions'

import cartitems from '../test-data/cart-items.json'

import { AddtoCartFlow } from '../Flows/AddtoCartFlow';

test('Add Multiple items and Make an Order', async ({ page,log, evidence },testInfo) => {
    let homepage = new HomePage(page,log,evidence)

    log.info("Adding items to cart")
   
    let addtocartflow = new AddtoCartFlow(page,log,evidence)

    await addtocartflow.AddItemsToCart()

     let cartpage = new CartPage(page,log,evidence)

    log.info("Going to cart page")

    await cartpage.goto()

    log.info("Taking screenshot of cartpage")

    await screenshot(page,testInfo,"CartPage")

    log.info("Removing an item")

    await cartpage.removeItem("001")

    log.info("Taking screenshot of removed item cartpage")

    await screenshot(page,testInfo,"Item removed CartPage")

});

