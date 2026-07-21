package ust.sdet.clients;

import io.qameta.allure.Step;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import lombok.extern.slf4j.Slf4j;
import ust.sdet.Builders.User;
import ust.sdet.Builders.UserSeeder;
import ust.sdet.Config.EnvironmentReader;
import ust.sdet.Config.Secrets;
import ust.sdet.SpecBuilder.HeadersSpec;
import ust.sdet.endpoints.Endpoints;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.notNullValue;

@Slf4j
public class CreateUserClient {

    HeadersSpec headspec = new HeadersSpec();

    Endpoints endpoints = new Endpoints();

    Secrets secrets = new Secrets();

    @Step("Creating the User Request")
    public Response CreateUser(User user){

        log.info("Starting the create user process...");

        return given()
                .spec(headspec.setHeaders())
                .body(user)
                .when()
                .post(endpoints.createUser())
                .then()
                .body("userID",notNullValue())
                .extract().response()
                ;
    }

}
