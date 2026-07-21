package com.ust.sdet.finalAssessment.tests;

import com.ust.sdet.finalAssessment.SpecFactory.SpecBuilder;
import com.ust.sdet.finalAssessment.client.BookListClient;
import com.ust.sdet.finalAssessment.client.Token_AuthZ_Client;
import com.ust.sdet.finalAssessment.client.UserClient;
import com.ust.sdet.finalAssessment.model.BookListModel;
import com.ust.sdet.finalAssessment.model.Token_AuthZ;
import com.ust.sdet.finalAssessment.model.UserRequest;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static com.ust.sdet.finalAssessment.contracts.ContractAsserts.*;
import static org.junit.jupiter.api.Assertions.*;

public class GettingBooks {

    @Test
    @Tag("@smoke")
    @DisplayName("API Automation: Creating User, generating Token and retrieving Books")
    public void createUserWithPOST(){
        //Creating User
        Response response = (Response) new UserClient().user().then()
                .spec(new SpecBuilder().respSpec())
                .extract().response();

        //Schema Assertion
        assertCreatedJsonContract(response, "schemas/user.schema.json");

//        SERIALIZATION
        UserRequest userDetails = response.then()
                .extract().as(UserRequest.class);

        //Response Assertion
        assertNotNull(userDetails.userID());
        assertNotNull(userDetails.username());
        assertTrue(userDetails.books().isEmpty());

//        Generating Token
        Response resp = (Response) new Token_AuthZ_Client()
                .token(userDetails.username())
                .then()
                .spec(new SpecBuilder().respSpec())
                .statusCode(200).extract().response();

        //Schema Assertion
        assertOkJsonContract(resp, "schemas/token.schema.json");

//        SERIALIZATION
        Token_AuthZ userToken = resp.then()
                .extract().as(Token_AuthZ.class);

        //Response Assertion
        assertFalse(userToken.token().isBlank());
        assertTrue(userToken.status().equals("Success"));
        assertTrue(userToken.result().contains("User authorized successfully"));

        //Getting all Books
        Response resp_books = (Response) new BookListClient()
                .bookList(userToken.token())
                .then().spec(new SpecBuilder().respSpec())
                .statusCode(200).extract().response();

        //Schema Assertion
//        assertOkJsonContract(resp, "schemas/bookListCheck.schema.json");

//        SERIALIZATION
        BookListModel books = resp_books.then()
                .extract().as(BookListModel.class);

        assertFalse(books.books().get(0).isbn().isEmpty());
        assertFalse(books.books().get(0).title().isBlank());
        assertFalse(books.books().get(0).subTitle().isEmpty());
        assertFalse(books.books().get(0).author().isBlank());
        assertFalse(books.books().get(0).publish_date().isEmpty());
        assertFalse(books.books().get(0).publisher().isBlank());
        assertTrue(books.books().get(0).pages()>0);
        assertFalse(books.books().get(0).description().isBlank());
        assertFalse(books.books().get(0).website().isEmpty());





    }
}
