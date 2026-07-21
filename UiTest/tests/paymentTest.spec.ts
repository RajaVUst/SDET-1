import { secrets } from "../config/secrets";
import { test } from "../fixtures/index";
import { searchDatas } from "../TestData/searchData";
import { userDetails } from "../TestData/userDetails";

test.describe("Search a Product and validate filter",()=>{
    test("Search as a quest Full Flow",async ({searchFlow,log,paymentFlow})=>{

        await searchFlow.openWebsite();

        const searchKeyword = searchDatas.searchData1.keyword;
        await searchFlow.searchWithKeyword(searchKeyword);

        await paymentFlow.firstProductAddedToCart(searchKeyword);

        const fullName = userDetails.user1.fullName;
        const email = userDetails.user1.emailAddress;
        const phoneNumber = secrets.get(`${userDetails.user1.fullName}_PHONENUMBER`);
        const streetAddress = userDetails.user1.streetAddress;
        const ZIPcode = userDetails.user1.ZIPcode;
        const city =userDetails.user1.city;
        const state =userDetails.user1.state;
        const country =userDetails.user1.Country
        
        await paymentFlow.addShippingDetails(fullName,email,phoneNumber,streetAddress,city,state,ZIPcode,country);

        const cardNumber = secrets.get(`${userDetails.user1.fullName}_CARDNUMBER`);
        const cardExpiry = secrets.get(`${userDetails.user1.fullName}_EXPIRY`);
        const cardCvv = secrets.get(`${userDetails.user1.fullName}_CVV`)
        await paymentFlow.navigateToPaymentAndAddDetails(fullName,cardNumber,cardExpiry,cardCvv);
    })
})