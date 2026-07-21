package com.api.specs;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification;



import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.*;

public class ResponseSpec {
    public static ResponseSpecification userCreatedResponse(){
         return new ResponseSpecBuilder()
                 .expectContentType(ContentType.JSON)
                 .expectStatusCode(201)
                 .expectBody(matchesJsonSchemaInClasspath("schemas/user.schema.json"))
                 .build();
    }

    public static ResponseSpecification tokenGeneratedResponse(){
        return new ResponseSpecBuilder()
                .expectContentType(ContentType.JSON)
                .expectStatusCode(200)
                .expectBody(matchesJsonSchemaInClasspath("schemas/user_token.schema.json"))
                .build();
    }

    public static ResponseSpecification getBookResponse(){
        return new ResponseSpecBuilder()
                .expectContentType(ContentType.JSON)
                .expectStatusCode(200)
                .expectBody(matchesJsonSchemaInClasspath("schemas/books.schema.json"))
                .build();
    }
}


