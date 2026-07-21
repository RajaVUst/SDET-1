import {Page, Locator} from "@playwright/test";

export class HeaderLocators{
    constructor(private readonly page: Page){}

    retailHeaderLogo = () : Locator => this.page.getByTestId("logo-link");
    retailHeaderSearchButton = () : Locator => this.page.getByTestId("search-button");
    retailHeaderCartCountBadge = () : Locator => this.page.getByTestId("cart-count");
    retailHeaderCartButton = () : Locator => this.page.getByTestId("cart-link");


    async pageHeaderLogo(){
        return await this.retailHeaderLogo();
    }
    async pageHeaderSearchButton(){
        return await this.retailHeaderSearchButton();
    }
    async pageHeaderCartCountBadge(){
        return await this.retailHeaderCartCountBadge();
    }
    async pageHeaderCartButton(){
        return await this.retailHeaderCartButton();
    }

}