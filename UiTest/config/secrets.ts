import dotenv from "dotenv";
 
dotenv.config({
  path: "secrets.local.env"
});
 
export class secrets {
 
  static get(key: string): string {
    return process.env[`MUHAMMED_${key.toUpperCase()}`] ?? process.env[key]!;
  }

}