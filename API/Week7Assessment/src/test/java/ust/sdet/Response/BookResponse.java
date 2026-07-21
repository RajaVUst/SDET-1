package ust.sdet.Response;


import lombok.Builder;
import lombok.Data;
import ust.sdet.Builders.Book;

import java.util.List;

@Data
@Builder
public class BookResponse {

    private List<Book> books;
}
