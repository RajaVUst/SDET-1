import { Page } from "@playwright/test";
import { HeaderLocators } from "../../locators/HeaderLocators";

export class Header{

    private readonly headerLoc: HeaderLocators;
    constructor(private readonly page: Page){
        this.headerLoc = new HeaderLocators(page);
    }

    async SearchButton(){
        return await this.headerLoc.pageHeaderSearchButton();
    }

    async cartButton(){
        return await this.headerLoc.pageHeaderCartButton();
    }

    async cartBadgeCount(){
        return await this.headerLoc.pageHeaderCartCountBadge()
    }




}