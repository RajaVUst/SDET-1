import { Locator, Page, TestInfo } from "@playwright/test";
import { maskSensitiveData } from "../util/maskSensitiveData";

export class Evidence {
  constructor(
    private readonly page: Page,
    private readonly testInfo: TestInfo
  ) {}

  async evidenceText(name: string, value: unknown) {
    const safeValue = maskSensitiveData(value);

    await this.testInfo.attach(`${name}.json`, {
      body: JSON.stringify(safeValue, null, 2),
      contentType: "application/json",
    });
  }
  
}