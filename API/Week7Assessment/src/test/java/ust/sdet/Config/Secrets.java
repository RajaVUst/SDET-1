package ust.sdet.Config;

import java.util.Random;

public class Secrets {
    public String getUsername(){

        int randomNum = new Random().nextInt(10000);
        return "user" + randomNum;
    }

    public String getPassword(){
        return EnvironmentReader.getKey("ARAVIND_PASSWORD");
    }
}
