import { Page,Locator } from "@playwright/test";

export class checkoutpagelocators{
    static selectState(page:Page,state:string){
        const dropdown = page.locator(`//*[@data-testid='shipping-state-select']`);
        dropdown.locator('option').allTextContents();
         dropdown.selectOption({ label: state });
    }
}