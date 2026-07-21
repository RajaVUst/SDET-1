package ust.sdet.SpecBuilder;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.ResponseSpecification;

import static io.restassured.RestAssured.given;

public class AssertionSpec {

    public ResponseSpecification successRetrievalStatus(){
        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .build();
    }

    public ResponseSpecification successCreationStatus(){
        return new ResponseSpecBuilder()
                .expectStatusCode(201)
                .build();
    }

    public ResponseSpecification errorStatus(int statusCode){
        return new ResponseSpecBuilder()
                .expectStatusCode(statusCode)
                .build();
    }
}
