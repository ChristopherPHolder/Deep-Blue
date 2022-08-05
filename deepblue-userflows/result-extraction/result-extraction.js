// I <3 TypeScript <3
// The correct interface is located at https://github.com/GoogleChrome/lighthouse/blob/03af4038e0f0168c8d93b8706e8d287592704008/types/lhr/flow.d.ts#L22-L30
var fs = require('fs');
var auditResults = fs.readFileSync('./measures/scroll-to-buttom.uf.json');
var auditResult = JSON.parse(auditResults);
var resultSteps = auditResult.steps;
for (var _i = 0, resultSteps_1 = resultSteps; _i < resultSteps_1.length; _i++) {
    var step = resultSteps_1[_i];
    console.log(step.name);
    console.log(Object.keys(step.lhr.categories));
}
