import dotenv from "dotenv";
import path from "path";
dotenv.config({
    // path: path.resolve(__dirname, "../../.env")?? path.resolve(__filename, "../../.env")
});
 
function required(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
 
    return value;
}
 
export const ENV = {
    baseUrl: required("BASE_URL"),
    browser: "chromium",
    headless: "true",
    timeout: 30_000,
    tax: Number(required("JUSTIN_TAX"))
 
} as const;
 