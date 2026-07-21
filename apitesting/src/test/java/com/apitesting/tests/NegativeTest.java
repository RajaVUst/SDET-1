package com.apitesting.tests;

import com.apitesting.clients.AccountClient;
import com.apitesting.data.builder.CustomerBuilder;
import com.apitesting.data.models.AccounCreationResponse;
import com.apitesting.data.models.Customer;
import com.apitesting.data.testData;
import com.apitesting.support.utils.Log;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static com.apitesting.support.spec.response.ResponseSpec.*;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class NegativeTest {
    protected static AccountClient accountClient;

    @BeforeAll
    static void setUp(){
        Log.step("Initialisation of client started");
        accountClient = new AccountClient();
        Log.pass("Clients initialised");
    }

    @Test
    void SameUserIsCreatedTwoTimesReturn409(){
        Log.step("Create a customer using Customer");
        Log.step("Since we dont have a test data iam giving the userName as Jonn+Randum Numbers");
        Customer customer = new CustomerBuilder().username(testData.getUsername2()).build();
        Log.info("userName", customer.userName());
        Log.info("password", customer.password());
        Response response1 = accountClient.getUserId(customer)
                .then()
                .spec(okcreated()).extract().response();
        AccounCreationResponse accounCreationResponse = response1.as(AccounCreationResponse.class);
        Log.pass("Account is sucessfully created and response is given as 200");
        assertNotNull(accounCreationResponse.userID());
        assertNotNull(accounCreationResponse.username());
        Log.pass("Response Contain UserId and UserName");

        Log.step("Same User is created Once More");
        Response response2 = accountClient.getUserId(customer)
                .then()
                .spec(auth406Response()).extract().response();
        Log.pass("The API Return a 406 Status");

    }
}
