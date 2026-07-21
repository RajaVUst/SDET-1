import { test as diagnosticTest, expect } from "./LogFixture";
import fs from "fs";
import path from "path";

type ScreenshotFixture = {
  captureScreenshot: (name: string) => Promise<void>;
};

export const test = diagnosticTest.extend<ScreenshotFixture>({
  captureScreenshot: async ({ page }, use, testInfo) => {

    const screenshotsDir = path.join(process.cwd(), "screenshots");
    fs.mkdirSync(screenshotsDir, { recursive: true });

    await use(async (name: string) => {

      const filePath = path.join(
        screenshotsDir,
        `${testInfo.title.replace(/\s+/g, "_")}-${name}.png`
      );

      await page.screenshot({
        path: filePath,
        fullPage: true,
      });

      await testInfo.attach(name, {
        path: filePath,
        contentType: "image/png",
      });
    });
  },
});

export { expect };