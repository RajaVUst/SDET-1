package ust.sdet.Response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import ust.sdet.Builders.Book;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CreateUserResponse {
    String userID;
    String username;
    List<Book> books;
}