import { test, expect } from "../fixtures/index";
import { userdata } from "../testdata/userdata";

test('Payment Failure Validation', async ({ retail, log,captureScreenshot,page, }) => {
   log.info("Going to HomePage")
   await retail.goToHomePage();
   log.info("Select the Product and add to Cart")
   await retail.buyTheProduct();
   expect(page).toHaveURL(/\/cart/);
   log.info("Make a checkout")
   await retail.goToCheckout();
   expect(page).toHaveURL(/\/checkout/);
   log.info("enter user details",userdata.user1.name!,userdata.user1.email!,userdata.user1.phone!,userdata.user1.Address!,userdata.user1.City!,userdata.user1.ZIP!,userdata.user1.Country!,userdata.user1.State!)
   await retail.enterDetails(userdata.user1.name!,userdata.user1.email!,userdata.user1.phone!,userdata.user1.Address!,userdata.user1.City!,userdata.user1.ZIP!,userdata.user1.Country!,userdata.user1.State!);
   log.info("entering card details",userdata.card_details.Cardholder_Name!,userdata.card_details.Card_Number!,userdata.card_details.EXPIRY!,userdata.card_details.CVV!)
   await retail.checkFailureFor(userdata.card_details.Cardholder_Name!,userdata.card_details.Card_Number!,userdata.card_details.EXPIRY!,userdata.card_details.CVV!);
   captureScreenshot("Processing the Payment");
   expect(await retail.validateTheError()).toBe('Payment failed due to insufficient funds. Please try another card.');
   expect(page).toHaveURL(/\payment/);
   captureScreenshot("Captured the Evidence of Error");
});