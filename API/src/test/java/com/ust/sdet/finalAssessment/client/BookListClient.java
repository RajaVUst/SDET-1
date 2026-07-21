package com.ust.sdet.finalAssessment.client;

import com.ust.sdet.finalAssessment.SpecFactory.SpecBuilder;
import io.restassured.response.Response;

import static com.ust.sdet.finalAssessment.data.RequestBody.userBody;
import static io.restassured.RestAssured.given;

public class BookListClient {
    public BookListClient(){}

    public Response bookList(String token){
        return given()
                .spec(new SpecBuilder().reqSpec())
                .header("Authorization", "Bearer "+token)
                .when()
                .get("/BookStore/v1/Books");
    }
}
