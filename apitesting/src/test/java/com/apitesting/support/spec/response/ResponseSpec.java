package com.apitesting.support.spec.response;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification;

import javax.swing.plaf.PanelUI;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class ResponseSpec {
    public static ResponseSpecification okjson(){
        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectContentType(ContentType.JSON)
                .build();
    }

    public static ResponseSpecification okcreated(){
        return new ResponseSpecBuilder()
                .expectStatusCode(201)
                .expectBody(matchesJsonSchemaInClasspath("schema/json/accountcreation.schema.json"))
                .expectContentType(ContentType.JSON)
                .build();
    }

    public static ResponseSpecification bookResponse(){
        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .expectBody(matchesJsonSchemaInClasspath("schema/json/bookresponse.schema.json"))
                .expectContentType(ContentType.JSON)
                .build();
    }

    public static ResponseSpecification auth406Response(){
        return new ResponseSpecBuilder()
                .expectStatusCode(406)
                .expectContentType(ContentType.JSON)
                .build();
    }


}
