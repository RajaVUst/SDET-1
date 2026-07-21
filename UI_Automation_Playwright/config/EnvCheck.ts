import dotenv from "dotenv";
import path from "path";
dotenv.config({
    // path: path.resolve(__dirname, "../../../.env")?? path.resolve(__filename, ".env")
});
 
function required(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
 
    return value;
}
 
export const ENV = {
    baseUrl: required("UI_BASE_URL"),
    browser: required("UI_BROWSER") ?? "chromium",
    headless: required("HEADLESS") === "true",
    timeout: Number(required("TIMEOUT")),
    tax: Number(required("TAX"))
 
} as const;
 