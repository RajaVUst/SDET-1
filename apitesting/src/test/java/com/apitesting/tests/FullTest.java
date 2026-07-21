package com.apitesting.tests;

import com.apitesting.clients.AccountClient;
import com.apitesting.clients.BookClient;
import com.apitesting.data.builder.CustomerBuilder;
import com.apitesting.data.models.AccounCreationResponse;
import com.apitesting.data.models.Book;
import com.apitesting.data.models.Customer;
import com.apitesting.data.testData;
import com.apitesting.support.utils.Log;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.apitesting.support.spec.response.ResponseSpec.*;
import static org.hamcrest.Matchers.greaterThan;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class FullTest {
    protected static AccountClient accountClient;
    protected static BookClient bookClient;
    protected static String userName;
    protected static String token;

    @BeforeAll
    static void setUp(){
        Log.step("Initialisation of client started");
        accountClient = new AccountClient();
        bookClient = new BookClient();

        Log.pass("Clients initialised");
    }

    @Test
    void FullFlow(){
        Log.step("Create a customer using Customer");
        Log.step("Since we dont have a test data iam giving the userName as Jonn+Randum Numbers");
        Customer customer = new CustomerBuilder().username(testData.getUsername1()).build();
        Log.info("userName", customer.userName());
        Log.info("password", customer.password());
        Response response = null;

        try {
            Log.step("Using Account Client Create a customer account in the website");
            response = accountClient.getUserId(customer)
                    .then()
                    .spec(okcreated()).extract().response();
            AccounCreationResponse accounCreationResponse = response.as(AccounCreationResponse.class);
            Log.pass("Account is sucessfully created and response is given as 200");
            assertNotNull(accounCreationResponse.userID());
            assertNotNull(accounCreationResponse.username());
            Log.pass("Response Contain UserId and UserName");

            userName = accounCreationResponse.username();

            Log.step("New Token is Generated");
            token = accountClient
                    .generateToken(userName, customer.password())
                    .then()
                    .spec(okjson())
                    .extract()
                    .path("token");
            Log.pass("New Token is generated and return with response 200");


            assertNotNull(token);
            Log.pass("Token is Not Null");

            Log.step("Checking the Booking Client");
            Response bookResponse = bookClient
                    .getBooks(token)
                    .then()
                    .spec(bookResponse())
                    .body("books.size()",greaterThan(0))
                    .extract()
                    .response();
            Log.pass("Got the Book list with number of books greater than 0 and follows the json schema");
            List<Book> books = bookResponse.jsonPath().getList("books",Book.class);

            for (Book book : books) {
                assertNotNull(book.title(), "Book Title is null");
                assertNotNull(book.isbn());
            }
            Log.pass("Each Book Has Title and Id");
        } catch (Exception e){
            if (response.statusCode()==409)
            {
                Log.skip("The Skipped Because The Customer is already Present in the website");
            }
        }
    }
}