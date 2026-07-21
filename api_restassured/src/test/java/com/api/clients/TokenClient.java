package com.api.clients;

import com.api.specs.RequestSpec;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class TokenClient {

    public Response generateToken(Object user){
       return given()
               .spec(RequestSpec.tokenGenerationRequest())
               .body(user)
               .when()
               .post("");
    }

    public String provideToken(Object user){
        return given()
                .spec(RequestSpec.tokenGenerationRequest())
                .body(user)
                .when()
                .post("")
                .then().extract().jsonPath().getString("token");
    }
}
