package com.apitesting.data.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Book(String isbn, String title, String subTitle, String author, String publish_date, String publisher, Integer pages, String description, String website) {}
