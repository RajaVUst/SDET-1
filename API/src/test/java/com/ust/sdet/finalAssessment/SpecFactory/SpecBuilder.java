package com.ust.sdet.finalAssessment.SpecFactory;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

import static com.ust.sdet.finalAssessment.support.Config.base_url;

public class SpecBuilder {

    public SpecBuilder(){}

    public RequestSpecification reqSpec(){
        return new RequestSpecBuilder()
                .setRelaxedHTTPSValidation()
                .setBaseUri(base_url())
                .setContentType(ContentType.JSON)
                .build();
    }

    public ResponseSpecification respSpec(){
        return new ResponseSpecBuilder()
                .expectContentType(ContentType.JSON)
                .build();
    }
}
