package ust.sdet.Builders;

public class UserSeeder {
    public static User.UserBuilder user(String name,String password) {
        return User.builder()
                .userName(name)
                .password(password);
    }
}
