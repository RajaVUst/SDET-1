import { test, expect } from "../fixtures/index";

test('Duplicate product Validation', async ({ retail, log,captureScreenshot,page, }) => {
   log.info("Going to HomePage")
   await retail.goToHomePage();
   log.info("Select the Product and increment 5 times and add to Cart")
   expect(page).toHaveURL(/\product/);
   await retail.buyTheProductWithQuantityIncrement();
   log.info("Product Incremented")
   expect(await retail.cartCountFromCart()).toBe("5");
   captureScreenshot("Cart Page");
   
});
