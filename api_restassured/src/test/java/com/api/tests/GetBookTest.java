package com.api.tests;

import com.api.data.Testdata.TestUser;
import com.api.data.builder.UserBuilder;
import com.api.data.model.User;
import com.api.specs.ResponseSpec;
import com.api.support.Logger;
import io.restassured.response.Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class GetBookTest extends BaseTest{

    @Test
    @DisplayName("Get the Books using the Token")
    public void getBooksUsingTheToken(){
        Logger.step("Creating User POJO with Username and Password");
        User user = new UserBuilder().setName(TestUser.getName()).build();

        String token = tokenClient.provideToken(user);
        Logger.info("Client Provide Token",token);
        bookClient.getBooks(token).then().spec(ResponseSpec.getBookResponse());
        Logger.step("Booking Client get the Books and Validated");
        Logger.pass("Test Passed");
    }
}
