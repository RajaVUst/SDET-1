import {Page, Locator} from "@playwright/test";
import { Header } from "./component/Header";

export class CartPage{
    private readonly header: Header;
    constructor(private readonly page: Page){
        this.header = new Header(page);
    }


    allCartCards = () : Locator => this.page.locator(`//div[starts-with(@data-testid, cart-item-prod`);
    cartCard = (cardstring: string) : Locator => this.page.getByTestId(`cart-item-prod-${cardstring}`);
    cartCardPrice = (card: string) : Locator => this.cartCard(card).getByRole("button").getByTestId(`cart-item-price-prod-${card}`);
    cartCardQuantity = (card: string) : Locator => this.cartCard(card).getByTestId(`cart-qty-value-prod-${card}`);
    cartCardRemoveButton = (card: string) : Locator => this.cartCard(card).getByTestId(`cart-remove-prod-${card}`);

    cartSubtotal = () : Locator => this.page.getByTestId("cart-subtotal");
    cartTax = () : Locator => this.page.getByTestId("cart-tax");
    cartTotal = () : Locator => this.page.getByTestId("cart-total");

    checkoutButton = () : Locator => this.page.getByTestId("checkout-button");
    cartEmptyMessage = () : Locator => this.page.getByRole("heading", {level: 2});


    async removeProduct(num: string){
        await this.cartCardRemoveButton(num).click();
    }

    async getProductPrice(num:string){
        return this.cartCardPrice(num);
    }

    async getSubtotal() {
        return await this.cartSubtotal();
    }
    
    async getTax() {
        return await this.cartTax();
    }
    
    async getTotal() {
        return await this.cartTotal();
    }

    async getEmptyCartMessage(){
        return await this.cartEmptyMessage();
    }

    async clickCheckoutButton(){
        await this.checkoutButton().click();
    }


}