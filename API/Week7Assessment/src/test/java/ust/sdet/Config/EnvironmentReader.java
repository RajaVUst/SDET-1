package ust.sdet.Config;

import io.github.cdimascio.dotenv.Dotenv;

public class EnvironmentReader {

    private static final Dotenv dotenv = Dotenv.configure()
            .ignoreIfMissing()
            .load();

    public static String getKey(String key) {

        String systemEnv = System.getenv(key);

        if (systemEnv != null && !systemEnv.trim().isEmpty()) {
            return systemEnv;
        }

        return dotenv.get(key);
    }
}
