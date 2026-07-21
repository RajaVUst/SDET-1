package com.apitesting.support.config;

import io.github.cdimascio.dotenv.Dotenv;

/**
 * Config needed for the tests like base URL Like those things
 */
public class Config {

    //To Avoid Object Creation Initialised Private Constructor
    private Config(){}
    private static Dotenv dotenv = Dotenv.load();
    private static String BaseUrl = dotenv.get("MUHAMMED_API_URL");
    public static String BASEURL(){
        return BaseUrl;
    }
}