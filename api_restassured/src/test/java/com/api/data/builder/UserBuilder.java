package com.api.data.builder;

import com.api.data.Testdata.TestUser;
import com.api.data.model.User;
import com.api.data.secret.Secrets;

public class UserBuilder {
    private String username;
    private String password;

    public UserBuilder setName(String name) {
         this.username = "unique_"+name;
         this.password = Secrets.get("PASSWORD");
         return this;
    }


    public User build(){
        return new User(this.username,this.password);
    }
}
