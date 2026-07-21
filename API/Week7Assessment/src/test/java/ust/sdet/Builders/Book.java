package ust.sdet.Builders;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Book {

    private String isbn;
    private String title;
    private String subTitle;
    private String author;
    private String publish_date;
    private String publisher;
    private Integer pages;
    private String description;
    private String website;
}
