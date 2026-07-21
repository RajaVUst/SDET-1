import {Page, TestInfo} from '@playwright/test'

export async function screenshot(page : Page, testInfo:TestInfo,name :string){

        await page.screenshot({ 
            path: `screenshots/${name}.png`,
            fullPage:true


        });
    
      
        await testInfo.attach(name, {
            path: `screenshots/${name}.png`,
            contentType: "image/png"
        });
    }