
import {Page,expect} from '@playwright/test'

import cartitems from '../test-data/cart-items.json'

import {locators} from '../Locators/locators'

import carddetails from '../test-data/card-details.json'

import {getCardNumber} from '../Config/Secrets'

export class PaymentPage{

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

    async toggleFailure(){
        let toggle = await this.locatorclass.checkoutFailureToggle(this.page)
        
        await toggle.check();
    }

    async fillDetails(){

        const user = "User"


        let cardname = await this.locatorclass.cardName(this.page)
        
        await cardname.click();

        await cardname.fill(carddetails[user].name);


        let cardnumber = await this.locatorclass.cardNumber(this.page)


        await cardnumber.click();
        await cardnumber.fill(carddetails[user].number);


        let cardexpiry = await this.locatorclass.cardExpiry(this.page)
        await cardexpiry.click();
        await cardexpiry.fill(carddetails[user].expiry);


        let cardcvv = await this.locatorclass.cardCvv(this.page)

        await cardcvv.click();
        await cardcvv.fill(carddetails[user].cvv);
     

    }

    async placeOrder(){

        let placeorderbutton =  await this.locatorclass.placeOrderButton(this.page)
         
         await placeorderbutton.click();

    }


}