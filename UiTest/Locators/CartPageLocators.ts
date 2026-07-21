import { Locator, Page } from "@playwright/test";

export class CartPageLocators {
    private constructor() {}
    
     static SELECTPRODUCTNAME(page:Page,keyword:string):Locator{
     return  page.locator(`//a[contains(text(),${keyword})]`); 

    }
}