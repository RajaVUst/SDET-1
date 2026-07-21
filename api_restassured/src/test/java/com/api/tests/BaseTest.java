package com.api.tests;

import com.api.clients.BookClient;
import com.api.clients.TokenClient;
import com.api.clients.UserClient;
import org.junit.jupiter.api.BeforeAll;

public class BaseTest {
    static UserClient userClient;
    static TokenClient tokenClient;
    static BookClient bookClient;
    @BeforeAll
    static void setup()
    {
        userClient = new UserClient();
        tokenClient = new TokenClient();
        bookClient = new BookClient();
    }
}
