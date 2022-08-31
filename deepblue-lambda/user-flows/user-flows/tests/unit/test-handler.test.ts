import { lambdaHandler } from '../../app';

import FlowResult from 'lighthouse/types/lhr/flow';

const TEST_TARGET_URL_STRING = 'https://deep-blue.io/'

describe('Unit test for app handler', function () {


    it('should run a user flow test and return report', async () => {

        const targetUrl = new URL(TEST_TARGET_URL_STRING);
        const result = await lambdaHandler(targetUrl) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");
        expect(result.name).toContain(targetUrl.hostname);

    }, 20000);

});
