import  {launch}  from "puppeteer";

// @ts-ignore
import {UserFlow} from 'lighthouse/lighthouse-core/fraggle-rock/user-flow';
import FlowResult from 'lighthouse/types/lhr/flow';

interface Event {
    targetUrl: string
}

export const lambdaHandler = async (event: Event): Promise<FlowResult|String> => {
    const { targetUrl } = event;
    let url: URL;
    try {
        url = new URL(targetUrl);
    } catch {
        const error = `ERROR: invalid url -> ${targetUrl}`
        console.log(error)
        return error;
    }
    
    try {
        const browser = await launch({headless: true});
        const page = await browser.newPage();
        const flow: UserFlow = await new UserFlow(page);
        await flow.navigate(url.href);
        const report = await flow.createFlowResult();
        await browser.close();
        return report;
    } catch (err) {
        console.log(err);
        throw(err);
    }
};
