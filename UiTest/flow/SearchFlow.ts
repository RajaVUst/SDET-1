import { expect, Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Evidence } from "../src/util/Evidence";
import { AppLogger } from "../src/logger/logger";
import { CartPage } from "../pages/CartPage";

export class SearchFlow {
    private readonly homePage:HomePage;
    
    private searchCount: string = '0 products';
    constructor(private readonly page:Page,private readonly evidence:Evidence,private readonly log:AppLogger) {
         /**
        * Every Page is intialised 
        */
        this.homePage = new HomePage(page);
        

    }


     /**
    * This Method will navigate to website and assert if the bannerCard is visible
    */
   async openWebsite(){
    this.log.info("The User is tring to Open the website");
    await this.homePage.goto();
    await expect(await this.homePage.bannerCardLocator()).toBeVisible();
    this.log.info("The User Reached Home page");
   }

   async searchWithKeyword(keyword:string){
    this.log.info(`The User is search for ${keyword}`);
    await this.homePage.searchBykeyword(keyword);
    await expect(await this.homePage.searchHeading()).toContain(`${keyword}`);
    var tempCount = await this.homePage.searchCount();
    this.searchCount = tempCount!;
    this.log.info(`For ${keyword} there are ${this.searchCount}`);
    this.evidence.evidenceText('Search keyword used for search and count',{
        searchKeyword:keyword,
        searchCount: this.searchCount
    })
   }

   async filterWithPrice(priceRange:string){
    this.log.info(`The User is trying  filter products with price range : ${priceRange}`);
    await this.homePage.applyPriceFilter(priceRange);
    var tempCount = await this.homePage.searchCount();
    this.log.info(`After filter there are ${tempCount}`);
    expect(tempCount).not.toBe(this.searchCount);
    this.log.info(`Before filter there are ${this.searchCount} and after filter there are ${tempCount}`);
    this.log.info("Both count is not same");
    this.evidence.evidenceText(`The search Count Before and After filter ${priceRange}`,{
        countBeforeFilter : this.searchCount,
        countAfterFilter : tempCount
    })
   }

   async firstProductAddedToCart(){
    this.log.info("User is tring to add first product in the list");
    var initialCartCount = this.homePage.cartCount();
    await this.homePage.addFirstProductToCart();
    this.log.info("User added first product to cart");
    var afterAddingCartCount = this.homePage.cartCount();
    expect(initialCartCount).not.toEqual(afterAddingCartCount);
    this.log.info(`Cart count before adding product ${initialCartCount} after adding ${afterAddingCartCount}`);
   }

   async noProductShown(){
    var temp = await this.homePage.searchCount();
    expect(temp).toEqual("0 products");
    var noProductLocator = await this.homePage.NoProduct();
    await expect(noProductLocator).toBeVisible();
    await expect(noProductLocator).toContainText("No products found");
   }

   

}