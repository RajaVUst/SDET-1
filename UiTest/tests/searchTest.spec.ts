import { test } from "../fixtures/index";
import { searchDatas } from "../TestData/searchData";

test.describe("Search a Product and validate filter",()=>{
    test("Happy Path -> Open Home -> Search Product -> Add Filter -> Check List is Changed",async ({searchFlow,log})=>{

        await searchFlow.openWebsite();

        const searchKeyword = searchDatas.searchData1.keyword;
        await searchFlow.searchWithKeyword(searchKeyword);
        
        const priceRange = searchDatas.searchData1.priceRange;
        await searchFlow.filterWithPrice(priceRange);

        log.info(`The Product List Changed for the ${searchKeyword}`);
    })
})