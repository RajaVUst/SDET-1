package com.ust.sdet.finalAssessment.data;

import java.util.Map;

import static com.ust.sdet.finalAssessment.data.TestData.*;

public class RequestBody {
    private RequestBody(){}

    public static Map<String, String> userBody= Map.of("userName", username,
            "password", userPassword);

    public static Map<String, String> tokenUserBody(String user){
        return Map.of("userName", user,
                "password", userPassword);
    }


}
