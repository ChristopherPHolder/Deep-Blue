import {
    UserFlowInteractionsFn,
    UserFlowContext,
    UserFlowProvider
} from '@push-based/user-flow';

interface pageInfo {
    path: string;
    name: string;
}

const interactions: UserFlowInteractionsFn = async (
    ctx: UserFlowContext
): Promise<any> => {

    const { page, flow, browser, collectOptions } = ctx;
    const { url } = collectOptions;

    await flow.navigate(`${url}`, {
        stepName: `Initial navigation to home`,
    });

    await flow.startTimespan({ stepName:'Scroll to buttom'})

    await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    await flow.endTimespan();

    await flow.snapshot({ stepName: 'At page buttom'});

};

const userFlowProvider: UserFlowProvider = {
    flowOptions: { name: "scroll-to-buttom" },
    interactions,
}

module.exports = userFlowProvider;