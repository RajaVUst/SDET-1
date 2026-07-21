package com.ust.sdet.finalAssessment.data;

import static com.ust.sdet.finalAssessment.support.EnvCheck.required;

public class TestData {

    private TestData(){}

    public static final String api_base_url = required("BASE_API_URL");

    public static final String username = required("JUSTIN_USER_NAME");

    public static final String userPassword = required("JUSTIN_USER_PASSWORD");

}
