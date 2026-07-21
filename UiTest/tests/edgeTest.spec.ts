import { test } from "../fixtures/index";
import { searchDatas } from "../TestData/searchData";

test.describe("Search An Invalid Product",()=>{
    test("Validating search page shows no product",async ({searchFlow,log})=>{

        await searchFlow.openWebsite();

        const searchKeyword = searchDatas.searchDatas2.invalidKeyword;
        await searchFlow.searchWithKeyword(searchKeyword);
        
        await searchFlow.noProductShown();

        log.info(`The Product List Changed for the ${searchKeyword}`);
    })
})