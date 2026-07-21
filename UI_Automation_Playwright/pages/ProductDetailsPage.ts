import {Page, Locator} from "@playwright/test";
import { Header } from "./component/Header";

export class ProductDetailsPage{
    private readonly header: Header;
    constructor(private readonly page: Page){
        this.header = new Header(page);
    }


    addToCart = () : Locator => this.page.getByTestId("add-to-cart-detail");
    buyNowButton = () : Locator => this.page.getByTestId("buy-now-button");
    
    cartCard = (cardstring: string) : Locator => this.page.getByTestId(`cart-item-prod-${cardstring}`);



    async productPageAddtoCart(){
        await this.addToCart().waitFor({state: "visible"});
        await this.addToCart().click();
    }

    async productPageBuyNow(){
        await this.buyNowButton().waitFor({state: "visible"});
        await this.buyNowButton().click();
    }



}