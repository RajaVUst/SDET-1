import {Page,expect} from '@playwright/test'

import cartitems from '../test-data/cart-items.json'

import {locators} from '../Locators/locators'

import {screenshot} from '../utils/Functions'
import { HomePage } from '../pages/HomePage'

import searchkeys from '../test-data/search-keys.json'

export class AddtoCartFlow{

     page : Page
        log:any
        evidence : any
        locatorclass : locators
        homepage :HomePage
    
        constructor(page : Page, log : any, evidence : any){
    
            this.page = page
            this.log = log
            this.evidence = evidence
            this.locatorclass = new locators()
            this.homepage = new HomePage(page,log,evidence)
    
    }


    async AddItemsToCart(){

        await this.homepage.goto()

        await expect(this.page).toHaveTitle(/Retail mart/i);

        this.evidence.items = ''

       

        this.log.info("Home page reached")

        this.log.info("Searching for items")

        for(const item of searchkeys["searches"]){

            await this.homepage.searchItem(item)

            await this.homepage.addToCart()

            this.evidence.items +=item

            this.log.info("Item added",{item:item})

        }

        this.log.info("All items added",{item:"laptop"})

    }

}