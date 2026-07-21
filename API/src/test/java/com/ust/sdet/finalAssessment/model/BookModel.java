package com.ust.sdet.finalAssessment.model;

public record BookModel(String isbn, String title, String subTitle, String author,
                        String publish_date, String publisher, int pages,
                        String description, String website) {
}
