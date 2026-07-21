import { test as base, expect } from '@playwright/test';
import { logger,  logs,  AppLogger,} from "../src/logger/logger";


type DiagnosticFixtures = {
  log: AppLogger;
};

export const test = base.extend<DiagnosticFixtures>({
  log: async ({}, use, testInfo) => {
    logs.length = 0;

    logger.info("Test Started");

    await use(logger);

    logger.info(`Test ${testInfo.status}`);
  },
});

export { expect };