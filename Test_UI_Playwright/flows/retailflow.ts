import { Page } from "playwright/test";
import { homepage } from "../pages/homepage";
import { cartpage } from "../pages/cartpage";
import { checkoutpage } from "../pages/checkoutpage";
import { paymentpage } from "../pages/paymentpage";
import { productpage } from "../pages/productPage";
export class retailflow{

    private readonly home:homepage;
    private readonly cart:cartpage;
    private readonly checkout:checkoutpage;
    private readonly payment:paymentpage;
    private readonly product:productpage;
  
    constructor(private readonly page:Page){
        this.home = new homepage(page);
        this.cart = new cartpage(page);
        this.checkout = new checkoutpage(page);
        this.payment = new paymentpage(page);
        this.product = new productpage(page);
    }
   
    async goToHomePage(){
        await this.home.goTohome();
    }

    async buyTheProduct(){
        await this.product.goToCart();
    }

    async buyTheProductWithQuantityIncrement(){
       await this.product.incrementProduct();
    }

    async goToCheckout(){
        await this.cart.goToCheckout();
    }

    async cartCountFromCart(){
        return await this.cart.validateTheCount();
    }
    async enterDetails(name:string,email:string,phone:string,address:string,city:string,zip:string,country:string,state:string){
        await this.checkout.enterTheCheckoutDetails(name,email,phone,address,city,zip,country,state);
    }

    async checkFailureFor(cardname:string,cardnumber:string,expiry:string,cvv:string){
        await this.payment.failurpayment(cardname,cardnumber,expiry,cvv);
    }

    async validateTheError(){
       const error = await this.payment.getError();
       return error;
    }

    

}