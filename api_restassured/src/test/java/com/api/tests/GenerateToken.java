package com.api.tests;

import com.api.data.Testdata.TestUser;
import com.api.data.builder.UserBuilder;
import com.api.data.model.User;
import com.api.specs.ResponseSpec;
import io.restassured.response.Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class GenerateToken extends BaseTest{

    @Test
    @DisplayName("Generating a Token for the User")
    public void generateAUniqueToken(){
        User user = new UserBuilder().setName(TestUser.getName()).build();

        Response tokenResponse = tokenClient.generateToken(user);

        tokenResponse.then().log().all().spec(ResponseSpec.tokenGeneratedResponse());

    }

}
