package com.apitesting.data;

public class testData {
    
    static int randomNumber = (int)(Math.random() * 100) + 1;

    private static String username1 = "Jonn"+randomNumber;
    private static String username2 = "Jonny"+randomNumber;

    public static String getUsername1(){
        return username1;
    }
    public static String getUsername2(){
        return username2;
    }

}
