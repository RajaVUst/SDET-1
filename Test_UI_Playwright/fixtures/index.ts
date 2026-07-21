import {test as base} from '../fixtures/EvidenceFixture'
import { retailflow } from '../flows/retailflow';

type PageFixtures = {
  retail:retailflow;
};

export const test = base.extend<PageFixtures>({

    retail:async({page},use)=>{
        await use(new retailflow(page));
    }

})

export {expect} from "@playwright/test"
