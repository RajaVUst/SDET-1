import { Page,Locator } from "@playwright/test";

export class cartpagelocators{
    static cartCount(page:Page){
       return page.locator(`//*[@data-testid='cart-count']`).textContent();
    }
}