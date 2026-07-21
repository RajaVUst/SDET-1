import dotenv from "dotenv";
 
dotenv.config();
dotenv.config({
  path: "secrets.local.env"
});
 
export class Secrets {
 
  static get(key: string): string | undefined {
    return process.env[key.toUpperCase()] ?? process.env[key];
  }
 
}
 