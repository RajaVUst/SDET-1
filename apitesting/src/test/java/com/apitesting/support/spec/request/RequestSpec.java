package com.apitesting.support.spec.request;

import com.apitesting.support.config.Config;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class RequestSpec {
    public static RequestSpecification requestSpec(){
        return new RequestSpecBuilder()
                .setBaseUri(Config.BASEURL())
                .setContentType(ContentType.JSON)
                .build();

    }
    public  static RequestSpecification auth(String Token){
        return new RequestSpecBuilder()
                .addRequestSpecification(requestSpec())
                .addHeader("Authorization", "Bearer "+Token)
                .build();
    }
}
