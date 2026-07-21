package com.api.tests;

import com.api.data.Testdata.TestUser;
import com.api.data.builder.UserBuilder;
import com.api.data.model.User;
import com.api.specs.ResponseSpec;
import io.restassured.response.Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class GetBookTest extends BaseTest{

    @Test
    @DisplayName("Get the Books using the Token")
    public void getBooksUsingTheToken(){
        User user = new UserBuilder().setName(TestUser.getName()).build();

        String token = tokenClient.provideToken(user);

        bookClient.getBooks(token).then().log().all().spec(ResponseSpec.getBookResponse());
    }
}
