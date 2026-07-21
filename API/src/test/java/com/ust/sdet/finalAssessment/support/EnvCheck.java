package com.ust.sdet.finalAssessment.support;

import io.github.cdimascio.dotenv.Dotenv;

public final class EnvCheck {

    private EnvCheck() {
    }

    private static final Dotenv dotEnv = Dotenv.load();

    public static String optional(String name, String defaultValue) {

        String systemProperty = System.getProperty(name);
        if (systemProperty != null && !systemProperty.isBlank()) {
            return systemProperty;
        }
        String envValue = dotEnv.get(name);
        if (envValue != null && !envValue.isBlank()) {
            return envValue;
        }
        return defaultValue;
    }

    public static String required(String name) {
        String value = optional(name, null);
        if (value == null || value.isBlank()) {
            throw new IllegalStateException(
                    "Missing required environment variable or system property: "
                            + name);
        }
        return value;
    }
}