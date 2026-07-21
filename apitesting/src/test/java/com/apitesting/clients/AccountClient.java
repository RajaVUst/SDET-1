package com.apitesting.clients;

import com.apitesting.data.models.Customer;
import io.restassured.response.Response;

import java.util.Map;

import static com.apitesting.support.spec.request.RequestSpec.requestSpec;
import static io.restassured.RestAssured.given;
public class AccountClient {
    public Response getUserId(Customer customer){
        return given()
                .spec(requestSpec())
                .body(customer)
                .when()
                .post("/Account/v1/User");
    }

    public Response generateToken(String userName,String password){
        return given()
                .spec(requestSpec())
                .body(Map.of("userName",userName,"password",password))
                .when()
                .post("/Account/v1/GenerateToken");
    }

}
