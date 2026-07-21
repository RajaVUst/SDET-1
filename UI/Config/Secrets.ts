import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export  function  getCardNumber(): string {
    const envKey = `ARAVIND_CARD_NUMBER`;

        try {
            console.log(process.cwd())
            const envFilePath = path.resolve(process.cwd(),'.env'); 

            console.log("Looking for .env file at:", envFilePath);
            
            if (fs.existsSync(envFilePath)) {
                const parsedEnv = dotenv.parse(fs.readFileSync(envFilePath));
                
                if (parsedEnv[envKey]) {
                    return parsedEnv[envKey];
                }
            }
        } catch (err) {
            console.warn(`Could not read or parse the .env file. Falling back to process.env...`);
        }


        const password = process.env[envKey];
        
        if (!password) {
            throw new Error(`Missing secret: ${envKey} is not defined.`);
        }

        return password;
    }
