import { Locator, Page } from "@playwright/test";


export class ConformationPage {
    constructor(private readonly page:Page) {}


       async verifyConformationPageReached(){
        await this.page.getByTestId('order-number').isVisible();
        await this.page.getByTestId('confirmation-heading').isVisible();
       }

       async getTotalPrice(){
        await this.page.getByTestId('confirmation-heading').isVisible();
       }

       async totalPrice(){
        const TotalPrice = await this.page.getByTestId("confirmation-total").textContent();
        return TotalPrice;
       }
}