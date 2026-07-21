package ust.sdet.SpecBuilder;

import io.qameta.allure.Step;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.ResponseSpecification;

import static io.restassured.RestAssured.given;

public class AssertionSpec {

    @Step("Verifying the Success 200 Status code is shown")
    public ResponseSpecification successRetrievalStatus(){
        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .build();
    }

    @Step("Verifying the success 201 Status code is shown")
    public ResponseSpecification successCreationStatus(){
        return new ResponseSpecBuilder()
                .expectStatusCode(201)
                .build();
    }

    @Step("Verifying the error Status code is shown")
    public ResponseSpecification errorStatus(int statusCode){
        return new ResponseSpecBuilder()
                .expectStatusCode(statusCode)
                .build();
    }
}
