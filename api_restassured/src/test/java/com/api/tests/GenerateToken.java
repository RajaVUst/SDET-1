package com.api.tests;

import com.api.data.Testdata.TestUser;
import com.api.data.builder.UserBuilder;
import com.api.data.model.User;
import com.api.specs.ResponseSpec;
import com.api.support.Logger;
import io.restassured.response.Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class GenerateToken extends BaseTest{

    @Test
    @DisplayName("Generating a Token for the User")
    public void generateAUniqueToken(){
        Logger.step("Creating User POJO with Username and Password");
        User user = new UserBuilder().setName(TestUser.getName()).build();
        Logger.step("Generating The Token");
        Response tokenResponse = tokenClient.generateToken(user);
        Logger.step("Validating The Token");
        tokenResponse.then().spec(ResponseSpec.tokenGeneratedResponse());
        Logger.pass("Test Passed");
    }

}
