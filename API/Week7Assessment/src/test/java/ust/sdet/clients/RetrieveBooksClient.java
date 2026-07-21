package ust.sdet.clients;

import io.qameta.allure.Param;
import io.qameta.allure.Step;
import io.qameta.allure.model.Parameter;
import io.restassured.response.Response;
import lombok.extern.slf4j.Slf4j;
import ust.sdet.Builders.User;
import ust.sdet.Config.Secrets;
import ust.sdet.Response.BookResponse;
import ust.sdet.SpecBuilder.AssertionSpec;
import ust.sdet.SpecBuilder.HeadersSpec;
import ust.sdet.endpoints.Endpoints;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

@Slf4j
public class RetrieveBooksClient {


    HeadersSpec headspec = new HeadersSpec();

    Endpoints endpoints = new Endpoints();

    Secrets secrets = new Secrets();
    AssertionSpec assertionSpec = new AssertionSpec();


    @Step("Retrieving the books List")
    public BookResponse RetrieveBooks(@Param(mode = Parameter.Mode.MASKED)String token){
        log.info("Retrieving the books List");
        return given()
                .spec(headspec.setAuthHeaders(token))
                .when()
                .get(endpoints.retrieveBooksList())
                .then()
                .body(matchesJsonSchemaInClasspath("schemas/json/Booklist.json"))
                .extract()
                .as(BookResponse.class)
                ;
    }
}
