package ust.sdet.SpecBuilder;

import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import ust.sdet.Config.Config;

import static io.restassured.RestAssured.given;

public class HeadersSpec {
    Config config = new Config();

    public RequestSpecification setHeaders(){
        return
                given()
                        .baseUri(config.getBaseUrl())
                        .basePath("/")
                        .contentType(ContentType.JSON);
    }

    public RequestSpecification setAuthHeaders(String token){
        return
                given()
                        .baseUri(config.getBaseUrl())
                        .basePath("/")
                        .contentType(ContentType.JSON)
                        .header("Authorization","Bearer "+token)
                ;
    }


}
