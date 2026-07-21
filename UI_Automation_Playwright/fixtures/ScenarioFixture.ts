import {test as base, expect} from "@playwright/test";
import { RemoveProductFlow } from "../flows/RemoveProductFlow";
import { PaymentSuccessFlow } from "../flows/PaymentSuccessFlow";

type scenariofixture = {
    scenario1: RemoveProductFlow,
    scenario2: PaymentSuccessFlow
}

export const test = base.extend<scenariofixture>({
    scenario1: async ({page}, use) => {
        await use(new RemoveProductFlow(page));
    },
    scenario2: async ({page}, use) => {
        await use(new PaymentSuccessFlow(page))
    }
});

export {expect} from "@playwright/test";