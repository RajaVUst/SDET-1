import { Locator, Page } from "@playwright/test";


export class ShippingPage {
    constructor(private readonly page:Page) {}

       async addShippingDetails(fullName:string,emailAddress:string,phoneNumber:string,streetAddress:string,city:string,state:string,ZIPcode:string,Country:string){
        await this.page.getByTestId('guest-name-input').click();
        await this.page.getByTestId('guest-name-input').fill(fullName);
        await this.page.getByTestId('guest-email-input').click();
        await this.page.getByTestId('guest-email-input').fill(emailAddress);
        await this.page.getByTestId('guest-phone-input').click();
        await this.page.getByTestId('guest-phone-input').fill(phoneNumber);
        await this.page.getByTestId('shipping-street-input').click();
        await this.page.getByTestId('shipping-street-input').fill(streetAddress);
        await this.page.getByTestId('shipping-city-input').click();
        await this.page.getByTestId('shipping-city-input').fill(city);
        await this.page.getByTestId('shipping-state-select').selectOption(state);
        await this.page.getByTestId('shipping-zip-input').click();
        await this.page.getByTestId('shipping-zip-input').fill(ZIPcode);
        await this.page.getByTestId('shipping-country-input').click();
        await this.page.waitForLoadState('domcontentloaded');
       }


       async continueToPayment(){
        await this.page.getByTestId('continue-to-payment-button').click();
       }
}