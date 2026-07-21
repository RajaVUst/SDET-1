import { Locator, Page } from "@playwright/test";
import { CartPageLocators } from "../Locators/CartPageLocators";


export class CartPage {
    constructor(private readonly page:Page) {}


       async proceedToCheckout(){
        await this.page.getByRole('button',{name:"Proceed to Checkout"}).click();
       }

       async productName(keyword:string){
        const ProductName = await CartPageLocators.SELECTPRODUCTNAME(this.page,keyword).textContent();
        return ProductName;
       }

       async totalPrice(){
        const TotalPrice = await this.page.getByTestId("cart-total").textContent();
        return TotalPrice;
       }
}