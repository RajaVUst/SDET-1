package com.ust.sdet.finalAssessment.client;

import com.ust.sdet.finalAssessment.SpecFactory.SpecBuilder;
import io.restassured.response.Response;

import static com.ust.sdet.finalAssessment.data.RequestBody.userBody;
import static io.restassured.RestAssured.given;
import static com.ust.sdet.finalAssessment.SpecFactory.SpecBuilder.*;

public class UserClient {

    public UserClient(){}

    public Response user(){
        return given()
                .spec(new SpecBuilder().reqSpec())
                .body(userBody)
                .when()
                .post("/Account/v1/User");
    }
}
