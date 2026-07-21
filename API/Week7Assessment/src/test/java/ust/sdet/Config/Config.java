package ust.sdet.Config;

public class Config {

    public String getBaseUrl(){
        return EnvironmentReader.getKey("ARAVIND_BASE_URL");
    }



}
