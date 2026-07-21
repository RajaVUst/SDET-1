package com.api.specs;

import com.api.config.Config;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class RequestSpec {

    public static RequestSpecification requestSpec(){
        return new RequestSpecBuilder()
                .setBaseUri(Config.BASEURL())
                .setContentType(ContentType.JSON)
                .setAccept(ContentType.JSON)
                .build();
    }

   public static RequestSpecification useCreationRequest(){
        return new RequestSpecBuilder()
                .addRequestSpecification(requestSpec())
                .setBasePath("/Account/v1/User")
                .build();
   }

   public static RequestSpecification tokenGenerationRequest(){
        return new RequestSpecBuilder()
                .addRequestSpecification(requestSpec())
                .setBasePath("/Account/v1/GenerateToken")
                .build();

   }

   public static RequestSpecification getBookRequest(String token){
        return new RequestSpecBuilder()
                .addRequestSpecification(requestSpec())
                .setBasePath("/BookStore/v1/Books")
                .addHeader("Authorization ","Bearer "+token)
                .build();
   }



}
