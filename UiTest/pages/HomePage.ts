import { expect, Locator, Page } from "@playwright/test";


export class HomePage {
    constructor(private readonly page:Page) {}

    async goto(){
        await this.page.goto("/",{waitUntil:'domcontentloaded'});
    }

    async bannerCardLocator(): Promise<Locator> {
        return this.page.getByTestId("home-page");
    }


        /**
        * This method is used for searching an element
        */
       async searchBykeyword(keyword:string){
        var SEARCH_INPUT = this.page.getByTestId("search-input")
        var SEARCH_BUTTON = this.page.getByRole('button',{name:"Search"})

        await SEARCH_INPUT.isVisible();
        await SEARCH_INPUT.clear();
        await SEARCH_INPUT.fill(keyword);

        await SEARCH_BUTTON.isVisible();
        await SEARCH_BUTTON.click();
       }

       async searchCount(){
        var SEARCHCOUNT = this.page.getByTestId("results-count");
        return SEARCHCOUNT.textContent();
       }

       async searchHeading(){
        var SEARCHHEADINH = await this.page.getByRole('heading',{level:2});
        return SEARCHHEADINH.textContent();
       }


       async applyPriceFilter(PriceRange:string){
        var PRICEFILTERSECTION = this.page.getByTestId("price-filter");
        await PRICEFILTERSECTION.getByRole('button',{name:`${PriceRange}`}).click()
       }

       async addFirstProductToCart(){
        await this.page.getByRole('button',{name:"Add to Cart"}).first().click();
      }

      async gotoCart(){
        await this.page.getByTestId('cart-link').click();
      }

      async cartCount(){
        var cartCount = await this.page.getByTestId('cart-count').textContent();
        return Number.isNaN(Number(cartCount)) ? 0 : Number(cartCount);
      }

      async NoProduct(){
       return this.page.getByTestId("no-products-found");
      }
}