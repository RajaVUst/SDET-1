import { test as base, expect } from '@playwright/test';
import { RetailFlow } from '../flows/RetailFlow';

export const test = base.extend<{retail: RetailFlow}>({
    retail: async ({ page }, use) => {
        await use (new RetailFlow(page));
    }
})

export {expect} from '@playwright/test';