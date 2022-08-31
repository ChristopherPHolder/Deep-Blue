import { lambdaHandler } from '../../app';

import FlowResult from 'lighthouse/types/lhr/flow';

import { join } from 'path';
import { readdir, stat } from 'fs/promises';

const TEST_TARGET_URL_STRING = 'https://deep-blue.io/'

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
        expect(size).toBeLessThanOrEqual(1197984);

    });

    it('should run a user flow test and return report', async () => {

        const targetUrl = new URL(TEST_TARGET_URL_STRING);
        const result = await lambdaHandler(targetUrl) as FlowResult;

        expect(result).toBeTruthy();
        expect(typeof result).toEqual("object");
        expect(result.name).toContain("User flow");
        expect(result.name).toContain(targetUrl.hostname);

    }, 20000);

});
