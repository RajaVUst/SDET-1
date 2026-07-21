package com.ust.sdet.finalAssessment.support;

import static com.ust.sdet.finalAssessment.data.TestData.*;

public class Config {

    private Config(){}

    public static final String base_url(){
        return api_base_url;
    }
}
