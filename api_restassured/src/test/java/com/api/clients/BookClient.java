package com.api.clients;

import com.api.specs.RequestSpec;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BookClient {

    public Response getBooks(String token){
        return given()
                .spec(RequestSpec.getBookRequest(token))
                .when()
                .get("");
    }
}
