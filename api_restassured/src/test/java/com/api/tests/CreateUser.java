package com.api.tests;

import com.api.data.Testdata.TestUser;
import com.api.data.builder.UserBuilder;
import com.api.data.model.User;
import com.api.specs.ResponseSpec;
import io.restassured.response.Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class CreateUser extends BaseTest{

    @Test
    @DisplayName("Creating a User with unique Username and Password")
    public void validateUserCreation(){
        User user = new UserBuilder().setName(TestUser.getName()).build();

        userClient.createUser(user).then().log().all().spec(ResponseSpec.userCreatedResponse());
    }
}

