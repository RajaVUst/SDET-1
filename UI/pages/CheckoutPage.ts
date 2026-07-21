
import {Page,expect} from '@playwright/test'

import cartitems from '../test-data/cart-items.json'

import {locators} from '../Locators/locators'

import checkoutdetails from '../test-data/checkout-details.json'

export class CheckoutPage{

    page : Page
    log:any
    evidence : any
    locatorclass : locators

    constructor(page : Page, log : any, evidence : any){

        this.page = page
        this.log = log
        this.evidence = evidence
        this.locatorclass = new locators()

    }
    

    async fillDetails(){

        const user = "User"

        this.evidence.checkoutdetails = checkoutdetails[user]

        this.log.info("Inputting Name in Checkout")

        let checkoutname = await this.locatorclass.checkoutName(this.page)
        await checkoutname.click();
        await checkoutname.fill(checkoutdetails[user].name);

        this.log.info("Inputting Email in Checkout")

        let checkoutEmail = await this.locatorclass.checkoutEmail(this.page)


        await checkoutEmail.click();
        await checkoutEmail.fill(checkoutdetails[user].email);

        this.log.info("Inputting PhNo in Checkout")

        let checkoutPhNo = await this.locatorclass.checkoutPhno(this.page)
        await checkoutPhNo.click();
        await checkoutPhNo.fill(checkoutdetails[user].phno);

        this.log.info("Inputting Street in Checkout")


        let checkoutStreet = await this.locatorclass.checkoutStreet(this.page)

        await checkoutStreet.click();
        await checkoutStreet.fill(checkoutdetails[user].address);

        this.log.info("Inputting City in Checkout")

        let checkoutCity = await this.locatorclass.checkoutCity(this.page)

        await checkoutCity.click();
        await checkoutCity.fill(checkoutdetails[user].city);

        this.log.info("Inputting State in Checkout")

         let checkoutState = await this.locatorclass.checkoutState(this.page)


        await checkoutState.selectOption( checkoutdetails[user].state );

        this.log.info("Inputting Zip in Checkout")

        let checkoutZip = await this.locatorclass.checkoutZip(this.page)


        await checkoutZip.click();
        await checkoutZip.fill(checkoutdetails[user].zipcode);
        
    }

    async continueToPayment(){
        let proceedButton = await this.locatorclass.proceedToPaymentButton(this.page)
         await proceedButton.click();
    }


}