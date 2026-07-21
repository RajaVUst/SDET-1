import { Page,Locator } from "@playwright/test";

export class productpagelocators{
  static increment(page:Page):Locator{
     return page.locator(`//*[@data-testid='quantity-increase']`);
  }
}