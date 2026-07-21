import winston from "winston";
import { maskSensitiveData } from "../util/maskSensitiveData";

export const logs: string[] = [];

const logFormat = winston.format.printf(
  ({ level, message, timestamp, ...data }) => {
    const safeData = maskSensitiveData(data);

    const dataText =
      Object.keys(safeData as object).length > 0
        ? ` ${JSON.stringify(safeData)}`
        : "";

    const formattedLog =
      `[${level.toUpperCase()} - ${timestamp}] ${message}${dataText}`;

    logs.push(formattedLog);

    return formattedLog;
  }
);

export const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp({
      format: "HH:mm:ss",
    }),
    logFormat
  ),

  transports: [
    new winston.transports.Console(),
  ],
});

export type AppLogger = typeof logger;