import dotenv from "dotenv";
 
dotenv.config();
 
export class Config {
    static readonly baseUrl = process.env.MUHAMMED_BASE_URL!;
    static readonly headless = process.env.HEADLESS === "true";
}