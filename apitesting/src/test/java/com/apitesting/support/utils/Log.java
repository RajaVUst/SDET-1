package com.apitesting.support.utils;

import io.qameta.allure.Allure;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Log {
    private static final Logger log = LoggerFactory.getLogger(Log.class);

    //To Avoid object Creation
    private Log(){};

    public static void step(String message) {
        log.info("[INFO] {}", message);
        Allure.step(message);
    }

    public static void pass(String message) {
        log.info("[PASS] {}", message);
        Allure.step("PASS : " + message);
    }

    public static void skip(String message) {
        log.info("[SKIPPED] {}", message);
        Allure.step("SKIPPED : " + message);
    }

    public static void info(String key, Object value) {
        String safeValue = isSensitive(key) ? "[SENSITIVEDATA]" : String.valueOf(value);

        log.info("[INFO] {} : {}", key, safeValue);
        Allure.step("[INFO] : " + key + " = " + safeValue);
    }

    private static boolean isSensitive(String key) {
        if (key == null) {
            return false;
        }

        String k = key.toLowerCase();

        return k.contains("token") ||
                k.contains("secret") ||
                k.contains("password");
    }
}