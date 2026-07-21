package ust.sdet.endpoints;

public class Endpoints {
    public String createUser(){
        return "/Account/v1/User";
    }

    public String generateToken(){
        return "/Account/v1/GenerateToken";
    }

    public String retrieveBooksList(){
        return "/BookStore/v1/Books";
    }
}
