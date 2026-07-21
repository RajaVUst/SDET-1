import { Page } from "playwright/test";
import { productpagelocators } from "../locators/productpageLocators";
export class productpage{
    constructor(private readonly page:Page){}

    async goToCart(){
        await this.page.getByRole('button',{name:"Buy Now"}).click();
    }

    async incrementProduct(){
        await productpagelocators.increment(this.page).click();
        await productpagelocators.increment(this.page).click();
        await productpagelocators.increment(this.page).click();
        await productpagelocators.increment(this.page).click();
        await this.page.getByRole('button',{name:"Buy Now"}).click();
    }
}