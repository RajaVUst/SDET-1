package ust.sdet.Util;

import io.qameta.allure.Step;
import ust.sdet.Builders.User;
import ust.sdet.Builders.UserSeeder;
import ust.sdet.Config.Secrets;

public class CreateAUser {
    Secrets secrets = new Secrets();
    @Step("Creating a User Request Body")
    public User createUser(){
        return UserSeeder.user(secrets.getUsername(),secrets.getPassword()).build();
    }
}
