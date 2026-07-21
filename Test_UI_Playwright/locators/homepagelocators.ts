import { Page} from "@playwright/test";

export class homepageLocators{
    static selectproduct(page:Page){
       return page.locator(`//div[@data-testid='product-card-prod-001']`);
    }
}