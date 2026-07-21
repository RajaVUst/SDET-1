import { Page } from "playwright/test";
import { paymentpagelocators } from "../locators/paymentlocators";
export class paymentpage{
    constructor(private readonly page:Page){}

    async failurpayment(cardname:string,cardnumber:string,expiry:string,cvv:string){
         await paymentpagelocators.selectcard(this.page);
         await this.page.getByPlaceholder(cardname).fill(cardname);
         await paymentpagelocators.cardNumber(this.page).fill(cardnumber);
         await this.page.getByPlaceholder('MM/YY').fill(expiry);
         await paymentpagelocators.cvv(this.page).fill(cvv);
         await this.page.getByRole('button',{name:/Place Order/i}).click();         
    }

    async getError(){
        const error = await paymentpagelocators.paymentError(this.page);
        return error;
    }
}