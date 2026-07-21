import { Page,Locator } from "@playwright/test";

export class paymentpagelocators{
  
    static selectcard(page:Page){
       page.locator(`//*[@data-testid='payment-scenario-failure']`).click();
    }

    static cardNumber(page:Page):Locator{
        return page.locator(`//*[@data-testid='payment-card-number']`);
    }

    static cvv(page:Page):Locator{
        return page.locator(`//*[@data-testid='payment-cvv']`);
    }

    static  paymentError(page:Page){
         page.locator(`//*[@data-testid='payment-general-error']`).isVisible()
         return page.locator(`//*[@data-testid='payment-general-error']`).textContent();
    }
}