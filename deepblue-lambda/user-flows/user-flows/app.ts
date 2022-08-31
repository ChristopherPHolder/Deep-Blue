import  {launch}  from "puppeteer";

// @ts-ignore
import {UserFlow} from 'lighthouse/lighthouse-core/fraggle-rock/user-flow';
import FlowResult from 'lighthouse/types/lhr/flow';

export const lambdaHandler = async (targetUrl: URL): Promise<FlowResult | Error> => {
    try {
        const browser = await launch({headless: true});
        const page = await browser.newPage();
        const flow: UserFlow = await new UserFlow(page);
        await flow.navigate(targetUrl.href);
        const report = await flow.createFlowResult();
        await browser.close();
        return report;
    } catch (err) {
        console.log(err);
        throw(err);
    }
};
