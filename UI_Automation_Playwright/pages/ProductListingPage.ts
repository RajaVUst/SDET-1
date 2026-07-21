import {Page} from "@playwright/test";
import { ProductListingLocators } from "../locators/PLPLocators";
import { Header } from "./component/Header";

export class ProductListingPage{
    private readonly locators: ProductListingLocators;
    private readonly header: Header;


    constructor(private readonly page: Page){
        this.locators = new ProductListingLocators(page);
        this.header = new Header(page);

    }


    async openCatalogPage(){
        await this.page.goto("/", {
            waitUntil: "domcontentloaded"
        });
    }

    async briefContent(){
        return this.locators.briefContent();
    }

    async headingH1Content(){
        return this.locators.headingH1Content();
    }

    async introContent(){
        return this.locators.introContent();
    }

    async shopNowButton(){
        return this.locators.shopNowLinkButton();
    }

    async clickshopNowButton(){
        await this.locators.shopNowLinkButton().click();
    }

    async getresultCount(){
        return await this.locators.resultCountspan();
    }

    async getAllProductCards(){
        return await this.locators.allProductCards();
    }
    async getProductCard(num: string){
        return this.locators.productCard((num));
    }
    async getProductCardImage(num: string){
        return this.locators.productCardImage((num));
    }
    async getProductCardLink(num: string){
        return this.locators.productCardLink((num));
    }
    async getProductCardDiscount(num: string){
        return this.locators.productCardLink((num));
    }
    async addToCartButton(num:string){
        return this.locators.productCardAddToCart((num));
    }
    async clickaddtocart(num: string){
        await this.locators.productCardAddToCart((num)).click();
    }

    async openProductPage(num: string){
        await this.locators.productCardName(num).click();
    }

    async clickCartButton(){
        (await this.header.cartButton()).click();
    }

    async cartcount(){
        return await this.header.cartBadgeCount();
    }

}