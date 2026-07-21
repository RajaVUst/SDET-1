import { expect, Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Evidence } from "../src/util/Evidence";
import { AppLogger } from "../src/logger/logger";
import { ShippingPage } from "../pages/ShippingPage";
import { CartPage } from "../pages/CartPage";
import { PaymentPage } from "../pages/PaymentPage";
import { ConformationPage } from "../pages/ConformationPage";

export class PaymentFlow {
    private readonly homePage:HomePage;
    private readonly shippingPage:ShippingPage;
    private readonly conformationPage:ConformationPage;
    private readonly paymentPage:PaymentPage;
    private CartTotal: string = "$922.24";
    private readonly cartPage:CartPage;
    constructor(private readonly page:Page,private readonly evidence:Evidence,private readonly log:AppLogger) {
         /**
        * Every Page is intialised 
        */
        this.homePage = new HomePage(page);
        this.shippingPage = new ShippingPage(page);
        this.cartPage = new CartPage(page);
        this.paymentPage = new PaymentPage(page);
        this.conformationPage = new ConformationPage(page);

    }

   async firstProductAddedToCart(keyword:string){
    this.log.info("User is tring to add first product in the list");
    await this.homePage.addFirstProductToCart();
    this.log.info("User added first product to cart");
    var afterAddingCartCount = await this.homePage.cartCount();
    this.log.info(`Cart count after adding ${afterAddingCartCount}`);
    
    this.log.info("User Trying to navigate to cart page");
    await this.homePage.gotoCart();
    const temp2 = await this.cartPage.totalPrice();
    this.CartTotal = temp2!;
    this.log.info(`Cart total for ${keyword} is ${this.CartTotal}`)
    await expect(this.page.url()).toContain(`/cart`);
    this.log.info("User Navigated to cart page");

   }

   async addShippingDetails(fullName:string,emailAddress:string,phoneNumber:string,streetAddress:string,city:string,state:string,ZIPcode:string,Country:string){

    this.log.info("User Trying to navigate to checkout");

    await this.cartPage.proceedToCheckout()
    this.log.info("User Navigated to checkout");

    this.log.info("User Trying Fill Shipping Details");
    await this.shippingPage.addShippingDetails(fullName,emailAddress,phoneNumber,streetAddress,city,state,ZIPcode,Country)
    this.log.info("User Filled shipping details",{
        FullName:fullName,
        EmailAddress:emailAddress,
        PhoneNumber:phoneNumber,
        StreetAddress:streetAddress,
        City:city,
        State:state,
        ZIPcode:ZIPcode,
        Country:Country
    });
    this.evidence.evidenceText("Shipping User Details",{
        FullName:fullName,
        EmailAddress:emailAddress,
        PhoneNumber:phoneNumber,
        StreetAddress:streetAddress,
        City:city,
        State:state,
        ZIPcode:ZIPcode,
        Country:Country
    })
   }

   async navigateToPaymentAndAddDetails(cardholderName:string,cardNumber:string,expiry:string,CVV:string){

    this.log.info("User Trying to navigate to Payment Page");

    await this.shippingPage.continueToPayment()
    this.log.info("User Navigated to Payment Page");

    this.log.info("User Trying Fill Payment Details");
    await this.paymentPage.addPaymentDetails(cardholderName,cardNumber,expiry,CVV);
    this.log.info("User Payment details",{
        cardholderName:cardholderName,
        cardNumber:cardNumber,
        expiry:expiry,
        CVV:CVV,
    });
    this.evidence.evidenceText("User Payment details",{
        cardholderName:cardholderName,
        cardNumber:cardNumber,
        expiry:expiry,
        CVV:CVV,
    })
   }

   async verifyProductOrderd(){
     this.log.info("User Trying to place order");

    await this.paymentPage.placeOrder()

    this.log.info("User Placed Order");

    this.log.info("User Redirected to Conformation page");
    await this.conformationPage.verifyConformationPageReached();
    var temp = await this.conformationPage.totalPrice();
    expect(temp).toEqual(this.CartTotal);

    this.log.info("Verify the final payment and cart total is same",{
       CartTotal: this.CartTotal,
       ConformationPageTotal: temp,
    })

    this.log.info("User Reached Conformation Page")

   }

}