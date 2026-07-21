package com.apitesting.data.builder;

import com.apitesting.data.models.Customer;
import com.apitesting.data.secrets.Secrets;

public class CustomerBuilder {
    private String username;

    public static CustomerBuilder aCustomer() {
        return new CustomerBuilder();
    }

    public CustomerBuilder username(String username) {
        this.username = username;
        return this;
    }

    public Customer build(){
        String password = Secrets.get("MUHAMMED_PASSWORD");
        return new Customer(username,password);
    }
}
