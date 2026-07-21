package com.api.clients;

import com.api.data.model.User;
import com.api.specs.RequestSpec;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class UserClient {

    public Response createUser(Object user){
        return given()
                .spec(RequestSpec.useCreationRequest())
                .body(user)
                .log().all()
                .post("");
    }
}
