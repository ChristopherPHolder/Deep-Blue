import { lambdaHandler } from '../../app';

const TEST_TARGET_URL_STRING = 'https://deep-blue.io/'

describe('Unit test for app handler', function () {

    it('verifies successful response', async () => {
        
        const targetUrl = new URL(TEST_TARGET_URL_STRING);

        const result = await lambdaHandler(targetUrl);

        expect(typeof result).toEqual('string');

        // expect(result).toContain(TEST_TARGET_URL_STRING);

    });
});
