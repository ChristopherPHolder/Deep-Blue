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

    const pages: pageInfo[] = [
        {
            path: '',
            name: 'home'
        },{
            path: 'about-us',
            name: 'about us'
        },{
            path: 'services',
            name: 'services'
        },{
            path: 'contact',
            name: 'contact'
        },{
            path: 'blog',
            name: 'blog'
        },{
            path: 'case-studies',
            name: 'recent projects'
        },{
            path: 'testimonials',
            name: 'testimonials'
        },{
            path: 'privacy-policy',
            name: 'privacy policy'
        },{
            path: 'terms-of-service',
            name: 'terms of service'
        } 
    ]

    for (const p of pages) {
        await flow.navigate(`${url}${p.path}`, {
            stepName: `Initial navigation to ${p.name}`,
        });
    } 
};

const userFlowProvider: UserFlowProvider = {
    flowOptions: { name: "initial-navigate" },
    interactions,
}

module.exports = userFlowProvider;