import { Page } from "playwright/test";
import { checkoutpagelocators } from "../locators/checkoutpagelocators";
export class checkoutpage{
    constructor(private readonly page:Page){}

      async enterTheCheckoutDetails(name:string,email:string,phone:string,address:string,city:string,zip:string,country:string,state:string){
            await this.page.getByPlaceholder(name).fill(name);
            await this.page.getByPlaceholder(email).fill(email);
            await this.page.getByPlaceholder(phone).fill(phone);
            await this.page.getByPlaceholder(address).fill(address);
            await this.page.getByPlaceholder(city).fill(city);
            await this.page.getByPlaceholder(zip).fill(zip);
            await checkoutpagelocators.selectState(this.page,state);

            await this.page.getByRole("button",{name:"Continue to Payment →"}).click();
    }
}