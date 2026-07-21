
import {Page,expect} from '@playwright/test'

import cartitems from '../test-data/cart-items.json'

import {locators} from '../Locators/locators'

export class CartPage{

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
    async goto(){

        await this.page.goto('/cart',{waitUntil:'domcontentloaded'})

    }

    async proceed(){
       let button =  await this.locatorclass.cartProceed(this.page)
       await button.click()
    }

    async removeItem(productid : string){

        let cartremovebutton = await this.locatorclass.cartRemoveItemButton(this.page,productid)

        await cartremovebutton.click()

    }


}