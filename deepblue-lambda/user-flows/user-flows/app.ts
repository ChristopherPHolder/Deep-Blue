import  {launch}  from "puppeteer";
import { ScrollAction } from "./actions.uf";
import { writeFileSync } from "fs";

// @ts-ignore
import {UserFlow} from 'lighthouse/lighthouse-core/fraggle-rock/user-flow';
import FlowResult from 'lighthouse/types/lhr/flow';

interface Event {
    targetUrl: string,
    testList?: string,
}

export const lambdaHandler = async (event: Event): Promise<FlowResult|String> => {

    const config = {
        extends: 'lighthouse:default',
        settings: {
            skipAudits: ['full-page-screenshot'],
        }
    }

      
    const { targetUrl, testList } = event;

    let url: URL;
    try {
        url = new URL(targetUrl);
    } catch {
        const error = `ERROR: invalid url -> ${targetUrl}`;
        console.log(error);
        return error;
    }

    const browser = await launch({headless: false});
    const page = await browser.newPage();
    const flow = await new UserFlow(page, {config});

    let scrollAction: ScrollAction;
    if (testList?.includes('scrollDown')) {
        scrollAction = new ScrollAction(page);
    }

    await flow.navigate(url.href, { stepName: "Cold Initial Navigation" });

    if (testList?.includes('warm')) await flow.navigate(url.href, { stepName: "Warm Initial Navigation" });

    if (testList?.includes('scrollDown')) {
        await flow.startTimespan({ stepName: 'Scroll To Bottom Of Page' });
        await scrollAction!.swipeToPageBottom();
        await flow.endTimespan();
    };

    if (testList?.includes('scrollUp') && testList?.includes('scrollDown')) {
        //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await flow.startTimespan({ stepName: 'Scroll To Top Of Page' });
        await scrollAction!.swipeToPageTop();
        await flow.endTimespan();
    };

    await browser.close();

    const report = await flow.generateReport();
    writeFileSync('flow.report.html', report);
    return await flow.createFlowResult();
};
