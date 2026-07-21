package ust.sdet.Records;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record TokenResponse(
        String token,
        String expires,
        String status,
        String result
) {}
