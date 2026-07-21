import { Locator, Page } from "@playwright/test";


export class PaymentPage {
    constructor(private readonly page:Page) {}

       async addPaymentDetails(cardholderName:string,cardNumber:string,expiry:string,CVV:string){
        await this.page.getByTestId('payment-card-name').click();
        await this.page.getByTestId('payment-card-name').fill(cardholderName);
        await this.page.getByTestId('payment-card-number').click();
        await this.page.getByTestId('payment-card-number').fill(cardNumber);
        await this.page.getByTestId('payment-expiry').click();
        await this.page.getByTestId('payment-expiry').fill(expiry);
        await this.page.getByTestId('payment-cvv').click();
        await this.page.getByTestId('payment-cvv').fill(CVV);
       }


       async placeOrder(){
        await this.page.getByTestId('place-order-button').click();
       }
}