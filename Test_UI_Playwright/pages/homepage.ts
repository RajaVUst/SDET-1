import { Page } from "playwright/test";
import { homepageLocators } from "../locators/homepagelocators";
export class homepage{
    constructor(private readonly page:Page){}

    async goTohome(){
        await this.page.goto('');
        await homepageLocators.selectproduct(this.page).click();
    }
}