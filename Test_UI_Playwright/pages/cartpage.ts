import { Page } from "playwright/test";
import { cartpagelocators } from "../locators/cartpagelocators";
export class cartpage{
    constructor(private readonly page:Page){}

    async goToCheckout(){
        await this.page.getByRole("button",{name:"Proceed to Checkout"}).click();
    }

    async validateTheCount(){
        return cartpagelocators.cartCount(this.page);
    }
  
}