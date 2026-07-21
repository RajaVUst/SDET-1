package ust.sdet.clients;

import io.restassured.response.Response;
import ust.sdet.Builders.User;
import ust.sdet.Builders.UserSeeder;
import ust.sdet.Config.Secrets;
import ust.sdet.Response.TokenResponse;
import ust.sdet.SpecBuilder.AssertionSpec;
import ust.sdet.SpecBuilder.HeadersSpec;
import ust.sdet.endpoints.Endpoints;

import static io.restassured.RestAssured.given;

public class GenerateTokenClient {


    HeadersSpec headspec = new HeadersSpec();

    Endpoints endpoints = new Endpoints();

    Secrets secrets = new Secrets();

    AssertionSpec assertionSpec = new AssertionSpec();

    public TokenResponse GenerateToken(User user){
        return given()
                .spec(headspec.setHeaders())
                .body(user)
                .when()
                .post(endpoints.generateToken())
                .then()
                .spec(assertionSpec.successRetrievalStatus())
                .extract()
                .as(TokenResponse.class);
    }

}
