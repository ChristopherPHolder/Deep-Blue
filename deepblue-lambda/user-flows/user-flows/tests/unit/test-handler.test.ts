import { lambdaHandler } from '../../app';

import FlowResult from 'lighthouse/types/lhr/flow';

import { join } from 'path';
import { readdir, stat } from 'fs/promises';

const TEST_TARGET_URL_STRING = 'https://deep-blue.io/'
const TEST_INVALID_TARGET_URL_STRING = 'invalid_url_test_string';

describe('Unit test for app handler', function () {

    it('should not consume more then 1.2M for an optimized build', async () => {

        const dirSize: any = async (dir: string) => { 
            const files = await readdir( dir, { withFileTypes: true } );
            const paths = files.map( async (file) => {
                const path = join( dir, file.name );
                if ( file.isDirectory() ) return await dirSize( path );
                if ( file.isFile() ) {
                    const { size } = await stat( path );
                    return size;
                }
                return 0;
            });
            return (await Promise.all(paths) ).flat(Infinity).reduce((i, size) => i + size, 0);
        }
        
        const size = await dirSize('../.aws-sam');

        expect(size).toBeTruthy();
        expect(size).toBeLessThanOrEqual(1199384);
    });

    it('should fail with an invalid url as a target url', async () => {
        const event = {
            targetUrl: TEST_INVALID_TARGET_URL_STRING
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toEqual(`ERROR: invalid url -> ${event.targetUrl}`);
    }, 100);

    it('should run a single  user-flow test and return report', async () => {
        const event = {
            targetUrl: TEST_TARGET_URL_STRING
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");

        const url = new URL(event.targetUrl);
        expect(result.name).toContain(url.hostname);

        expect(result.steps.length).toEqual(1);
        expect(result.steps[0].name).toEqual("Cold Initial Navigation")
    }, 20000);

    it('should run a cold and warm user-flow test and return a report', async () => {
        const event = {
            targetUrl: TEST_TARGET_URL_STRING,
            testList: 'cold, warm'
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");

        const url = new URL(event.targetUrl);
        expect(result.name).toContain(url.hostname);

        expect(result.steps.length).toEqual(2);

        expect(result.steps[0].name).toEqual("Cold Initial Navigation");
        expect(result.steps[1].name).toEqual("Warm Initial Navigation");
    }, 25000);

    it('should run a cold and scrollDown user-flow test and return a report', async () => {
        const event = {
            targetUrl: TEST_TARGET_URL_STRING,
            testList: 'cold, scrollDown'
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");

        const url = new URL(event.targetUrl);
        expect(result.name).toContain(url.hostname);

        expect(result.steps.length).toEqual(2);
        expect(result.steps[0].name).toEqual("Cold Initial Navigation");
        expect(result.steps[1].name).toEqual("Scroll To Bottom Of Page");
    }, 40000);

    it('should run a cold test and not a scrollUp and return a report', async () => {
        const event = {
            targetUrl: TEST_TARGET_URL_STRING,
            testList: 'cold, scrollUp'
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");

        const url = new URL(event.targetUrl);
        expect(result.name).toContain(url.hostname);

        expect(result.steps.length).toEqual(1);
        expect(result.steps[0].name).toEqual("Cold Initial Navigation");
    }, 20000);

    it('should run a cold, scrollDown and scrollUp test and return a report', async () => {
        const event = {
            targetUrl: TEST_TARGET_URL_STRING,
            testList: 'cold, scrollDown, scrollUp'
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");

        const url = new URL(event.targetUrl);
        expect(result.name).toContain(url.hostname);

        expect(result.steps.length).toEqual(3);
        expect(result.steps[0].name).toEqual("Cold Initial Navigation");
        expect(result.steps[1].name).toEqual("Scroll To Bottom Of Page");
        expect(result.steps[2].name).toEqual("Scroll To Top Of Page");
    }, 100_000);

    it('should run a cold, warm, scrollDown and scrollUp test and return a report', async () => {
        const event = {
            targetUrl: TEST_TARGET_URL_STRING,
            testList: 'cold, warm, scrollDown, scrollUp'
        }

        const result = await lambdaHandler(event) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");

        const url = new URL(event.targetUrl);
        expect(result.name).toContain(url.hostname);

        expect(result.steps.length).toEqual(4);
        expect(result.steps[0].name).toEqual("Cold Initial Navigation");
        expect(result.steps[1].name).toEqual("Warm Initial Navigation");
        expect(result.steps[2].name).toEqual("Scroll To Bottom Of Page");
        expect(result.steps[3].name).toEqual("Scroll To Top Of Page");
    }, 150_000);
});
