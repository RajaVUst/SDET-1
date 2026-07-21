import { Page, Locator } from "@playwright/test";

export class ProductListingLocators{
    constructor(private readonly page: Page){}

    briefContent = () : Locator => this.page.getByText("Automation Practice Store");
    headingH1Content = () : Locator => this.page.getByRole("heading", {name: 'Shop Everything at RetailMart'});
    introContent = () : Locator => this.page.getByText("Discover 35+ products across 6 categories. Free shipping on orders over $75.");
    shopNowLinkButton = () : Locator => this.page.getByRole("link", {name: 'Shop Now'});
    
    resultCountspan = () : Locator => this.page.getByTestId("results-count");
    allProductCards = () : Locator => this.page.locator("//div[starts-with(@data-testid, 'product-card-prod')]")

    productCard = (cardstring: string) : Locator => this.page.getByTestId(`product-card-prod-${cardstring}`);
    productCardImage = (card: string) : Locator => this.productCard(card).getByRole("img").first();
    productCardName = (card: string) : Locator => this.productCard(card).getByTestId(`product-name-prod-${card}`);
    productCardLink = (card: string) : Locator => this.productCard(card).getByRole("link").first();
    productCardDiscount = (card: string) : Locator => this.productCard(card).getByTestId(`product-discount-badge-prod-${card}`);
    productCardAddToCart = (card: string) : Locator => this.productCard(card).getByTestId(`add-to-cart-prod-${card}`);

  

}