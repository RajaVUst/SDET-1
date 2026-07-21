import { Page, expect } from "@playwright/test";
import { ProductListingPage } from "../pages/ProductListingPage";
import { Header } from "../pages/component/Header";
import { CartPage } from "../pages/CartPage";
import { ENV } from "../config/EnvCheck";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";


export class PaymentSuccessFlow{
    readonly productListPage: ProductListingPage;
    readonly header: Header;
    readonly productPage: ProductDetailsPage;
    readonly cart: CartPage
    constructor(private readonly page: Page){
        this.productListPage = new ProductListingPage(page);
        this.header = new Header(page);
        this.productPage = new ProductDetailsPage(page);
        this.cart = new CartPage(page);
    }

    async openHomePage(){
        await this.productListPage.openCatalogPage();
    }

    async verifyMainContentisVisible(){
        await expect(await this.productListPage.briefContent()).toBeVisible();
        (await this.productListPage.headingH1Content()).isVisible();
        (await this.productListPage.introContent()).isVisible();
        (await this.productListPage.shopNowButton()).isVisible();
    }

    async verifyresultcountIsCorrect(){
        return expect(await (await this.productListPage.getAllProductCards()).count()).toBeGreaterThan(0);
    }
    async verifyProductCardDetailsareVisible(itemNum:string){
        await expect(await this.productListPage.getProductCard(itemNum)).toBeVisible();
        await expect(await this.productListPage.getProductCardImage(itemNum)).toBeVisible();
        await expect(await this.productListPage.getProductCardLink(itemNum)).toBeVisible();
        await expect(await this.productListPage.getProductCardDiscount(itemNum)).toBeVisible();
    }

    async verifyCartCount(count: string){
        await expect(await (await this.productListPage.cartcount()).textContent()).toBe(count);
    }


    async openProductDetails(product: string){
        await this.productListPage.openProductPage(product);
    }


    async addToCartInProductPage(){
        await this.productPage.productPageAddtoCart();
    }

    async buyNowInProductPage(){
        await this.productPage.productPageBuyNow();
    }







    async clickAddtoCart(itemNum:string){
        await expect(await this.productListPage.addToCartButton(itemNum)).toBeVisible();
        await this.productListPage.clickaddtocart(itemNum);
    }



    async goToCart(){
        await this.productListPage.clickCartButton();
    }

    async removeCartItem(product: string){
        await this.cart.removeProduct(product);
    }


    async verifyremovingProductDecreasesCount(product: string){
        const sub = Number(await this.cart.getSubtotal())*100;
        const total = Number(await this.cart.getTotal())*100;
        const tax = ENV.tax;
        const calc_total = ((tax*sub)/100)+ sub;
        await expect(calc_total).toBe(total);
        const prod_price = Number(await this.cart.getProductPrice(product))*100;

        await this.removeCartItem(product);

        const newSub = Number(await this.cart.getSubtotal())*100;
        await expect(sub-prod_price).toBe(newSub);

        const newTotal = Number(await this.cart.getTotal())*100;
        
        const newcalc_total = ((tax*newSub)/100) + newSub;

        await expect(newcalc_total).toBe(newTotal);
    }


    async cartIsEmpty(){
        await this.cart.getEmptyCartMessage();
    }






}