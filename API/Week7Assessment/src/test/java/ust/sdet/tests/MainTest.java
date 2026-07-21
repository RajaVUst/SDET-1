package ust.sdet.tests;

import io.qameta.allure.*;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.logging.Logger;
import org.junit.platform.commons.logging.LoggerFactory;
import ust.sdet.Builders.User;
import ust.sdet.Builders.UserSeeder;
import ust.sdet.Response.TokenResponse;
import ust.sdet.Util.CreateAUser;
import ust.sdet.clients.CreateUserClient;
import ust.sdet.clients.GenerateTokenClient;
import ust.sdet.clients.RetrieveBooksClient;

import static io.restassured.RestAssured.given;


@Epic("BookStore Management")
@Feature("BookStore Book Management")
public class MainTest {

    private static final Logger log = LoggerFactory.getLogger(MainTest.class);

    @Test
    @Story("Create a user")
    @Description("Validates that a user can be created")
    @Severity(SeverityLevel.NORMAL)
    void CreateUserTest(){

        CreateAUser createAUser = new CreateAUser();

        User user = createAUser.createUser();

        CreateUserClient createUserClient = new CreateUserClient();

        createUserClient.CreateUser(user);


    }

    @Test
    @Story("Generate Token")
    @Description("Generates a token using a created user")
    @Severity(SeverityLevel.NORMAL)
    void GenerateTokenTest(){

        CreateAUser createAUser = new CreateAUser();

        User user = createAUser.createUser();

        CreateUserClient createUserClient = new CreateUserClient();

        Response response = createUserClient.CreateUser(user);

        GenerateTokenClient generateTokenClient = new GenerateTokenClient();

        TokenResponse tokenResponse = generateTokenClient.GenerateToken(user);

    }

    @Test
    @Story("Retrieve the Book List")
    @Description("Retrieves a book list using a generated token")
    @Severity(SeverityLevel.NORMAL)
    void RetrieveBookList(){

        CreateAUser createAUser = new CreateAUser();

        User user = createAUser.createUser();

        CreateUserClient createUserClient = new CreateUserClient();

        Response response = createUserClient.CreateUser(user);

        GenerateTokenClient generateTokenClient = new GenerateTokenClient();

        TokenResponse tokenResponse = generateTokenClient.GenerateToken(user);

        RetrieveBooksClient retrieveBooksClient = new RetrieveBooksClient();

        response = retrieveBooksClient.RetrieveBooks(tokenResponse.token());

        System.out.println(response.asPrettyString());
    }


}
