package com.ust.sdet;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;
import static org.hamcrest.Matchers.*;
import io.restassured.response.Response;

public class APITest {
    private static final Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();

    private static String getValue(String key) {
        String env = System.getenv(key);
        if (env != null && !env.isBlank()) {
            return env;
        }
        return dotenv.get(key);
    }

    private static final String BASE_URL = getValue("BASE_URL");
    private static final String USERNAME = getValue("USERNAME");
    private static final String PASSWORD = getValue("PASSWORD");

    @Test
    void createUserAndGetBooks() {
        String UUID = 
            given()
                .contentType(ContentType.JSON)
                .body(String.format("""
                    {
                        "userName": "%s",
                        "password": "%s"
                    }
                    """, USERNAME, PASSWORD))
            .when()
                .post(BASE_URL + "/Account/v1/User")
            .then()
                .statusCode(201)
                .body("username", equalTo(USERNAME))
                .extract()
                .path("userId");

        String token = 
            given()
                .contentType(ContentType.JSON)
                .body(String.format("""
                    {
                        "userName": "%s",
                        "password": "%s"
                    }
                    """, USERNAME, PASSWORD))
            .when()
                .post(BASE_URL + "/Account/v1/GenerateToken")
            .then()
                .statusCode(200)
                .body("status", equalTo("Success"))
                .body("result", equalTo("User authorized successfully."))
                .extract()
                .path("token");

        given()
            .header("Authorization", "Bearer " + token)
        .when()
            .get(BASE_URL + "/BookStore/v1/Books")
        .then()
            .statusCode(200)
            .body("books", hasSize(greaterThan(0)));
            
    }
}