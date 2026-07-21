
import {Page,expect} from '@playwright/test'

import cartitems from '../test-data/cart-items.json'

import {locators} from '../Locators/locators'

export class HomePage{

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

        await this.page.goto('/',{waitUntil:'domcontentloaded'})

    }

     async searchItem(item : string){

        this.log.info("Searching the item",{item:item})

        let inputtextbox = await this.locatorclass.getSearchInputBox(this.page)

        await inputtextbox.fill(item)

        await inputtextbox.click()

        let searchbutton = await this.locatorclass.getSearchButton(this.page)

        await searchbutton.click()

    }

    async addToCart(){


        let button = (await this.locatorclass.getAddtoCartButton(this.page)).first()

        await button.click()
        

    }

}