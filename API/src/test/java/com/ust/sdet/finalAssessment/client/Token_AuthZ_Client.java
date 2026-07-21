package com.ust.sdet.finalAssessment.client;

import com.ust.sdet.finalAssessment.SpecFactory.SpecBuilder;
import io.restassured.response.Response;

import static com.ust.sdet.finalAssessment.data.RequestBody.*;
import static io.restassured.RestAssured.given;

public class Token_AuthZ_Client {

    public Token_AuthZ_Client(){}

    public Response token(String name){
        return given()
                .spec(new SpecBuilder().reqSpec())
                .body(tokenUserBody(name))
                .when()
                .post("/Account/v1/GenerateToken");
    }
}
