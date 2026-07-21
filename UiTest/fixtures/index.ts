import { PaymentFlow } from "../flow/paymentFlow";
import { SearchFlow } from "../flow/SearchFlow";
import { Evidence } from "../src/util/Evidence";
import { test as base } from "./LoggerFixture";

type Fixtures = {
  evidence: Evidence;
  searchFlow: SearchFlow;
  paymentFlow:PaymentFlow;
};

export const test = base.extend<Fixtures>({
  evidence: async ({ page }, use, testInfo) => {
    await use(new Evidence(page, testInfo));
  },

  searchFlow: async ({ page, evidence ,log}, use) => {
    await use(new SearchFlow(page, evidence,log));
  },
  paymentFlow: async ({ page, evidence ,log}, use) => {
    await use(new PaymentFlow(page, evidence,log));
  },
});

export { expect } from "@playwright/test";