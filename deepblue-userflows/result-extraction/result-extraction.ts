// I <3 TypeScript <3

// The correct interface is located at https://github.com/GoogleChrome/lighthouse/blob/03af4038e0f0168c8d93b8706e8d287592704008/types/lhr/flow.d.ts#L22-L30

const fs = require('fs');

let auditResults = fs.readFileSync('./measures/scroll-to-buttom.uf.json');

let auditResult = JSON.parse(auditResults);

let resultSteps = auditResult.steps

for (const step of resultSteps) {
    console.log(step.name)
    console.log(Object.keys(step.lhr.categories))
}
