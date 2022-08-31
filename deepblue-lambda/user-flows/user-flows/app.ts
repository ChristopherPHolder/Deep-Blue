import  {launch}  from "puppeteer";

// @ts-ignore
import {UserFlow} from 'lighthouse/lighthouse-core/fraggle-rock/user-flow';
import FlowResult from 'lighthouse/types/lhr/flow';

interface Event {
    targetUrl: string,
    testsList?: string,
}

export const lambdaHandler = async (event: Event): Promise<FlowResult|String> => {
    const { targetUrl, testsList } = event;
    let url: URL;

    try {
        url = new URL(targetUrl);
    } catch {
        const error = `ERROR: invalid url -> ${targetUrl}`;
        console.log(error);
        return error;
    }

    const browser = await launch({headless: true});
    const page = await browser.newPage();
    const flow = await new UserFlow(page) as UserFlow;

    await flow.navigate(url.href, { stepName: "Cold Initial Navigation" });

    if (testsList) await flow.navigate(url.href, { stepName: "Warm Initial Navigation" });

    const report = await flow.createFlowResult();

    await browser.close();

    return report;
};
