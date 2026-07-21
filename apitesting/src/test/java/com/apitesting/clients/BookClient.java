package com.apitesting.clients;

import io.restassured.response.Response;
import static com.apitesting.support.spec.request.RequestSpec.auth;
import static io.restassured.RestAssured.given;
public class BookClient {
    public Response getBooks(String token){
        return given()
                .spec(auth(token))
                .when()
                .get("/BookStore/v1/Books");
    }
}
