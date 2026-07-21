package com.apitesting.data.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.checkerframework.checker.formatter.qual.UnknownFormat;

@JsonIgnoreProperties(ignoreUnknown = true)
public record AccounCreationResponse(String userID,String username) {
}
