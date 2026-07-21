import {test} from "../fixtures/ScenarioFixture";
import { Page } from "@playwright/test";

test.describe("Final Assessment", ()=> {
    test("Scenario 1: Product Remove Validation", async ({page, scenario1}) => {

        await scenario1.openHomePage();
        await scenario1.verifyMainContentisVisible();
        await scenario1.verifyresultcountIsCorrect();

        //adding product
        //first
        await scenario1.verifyProductCardDetailsareVisible("001");
        await scenario1.clickAddtoCart("001");
        await scenario1.verifyCartCount("1");

        //second
        await scenario1.verifyProductCardDetailsareVisible("002");
        await scenario1.clickAddtoCart("002");
        await scenario1.verifyCartCount("2");

        //third
        await scenario1.verifyProductCardDetailsareVisible("003");
        await scenario1.clickAddtoCart("003");
        await scenario1.verifyCartCount("3");


        //Going to cart page through button
        await scenario1.goToCart();
        
        // Removing first product 
        await scenario1.verifyremovingProductDecreasesCount("001");
        await scenario1.verifyCartCount("2");

        await scenario1.verifyremovingProductDecreasesCount("002");
        await scenario1.verifyCartCount("1");

        await scenario1.verifyremovingProductDecreasesCount("003");
       
        await scenario1.cartIsEmpty();

    })


    test.only("Scenario2: Payment Success Validaiton", async ({page, scenario2}) => {

        await scenario2.openHomePage();
        await scenario2.verifyMainContentisVisible();
        await scenario2.verifyresultcountIsCorrect();

        await scenario2.openProductDetails("001");

        await scenario2.addToCartInProductPage();
        await scenario2.buyNowInProductPage();
        



    })
})