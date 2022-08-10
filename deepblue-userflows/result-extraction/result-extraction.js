"use strict";
// I <3 TypeScript <3
exports.__esModule = true;
// The correct interface is located at https://github.com/GoogleChrome/lighthouse/blob/03af4038e0f0168c8d93b8706e8d287592704008/types/lhr/flow.d.ts#L22-L30
var fs = require('fs');
var auditResult = JSON.parse(fs.readFileSync('./measures/scroll-to-buttom.uf.json'));
var PASS_THRESHOLD = 0.9;
var RATINGS = {
    PASS: { label: 'pass', minScore: PASS_THRESHOLD },
    AVERAGE: { label: 'average', minScore: 0.5 },
    FAIL: { label: 'fail' },
    ERROR: { label: 'error' }
};
;
function prepareReportResults(auditStepResult) {
    if (!auditStepResult.configSettings.locale) {
        auditStepResult.configSettings.locale = 'en';
    }
    if (!auditStepResult.configSettings.formFactor) {
        // @ts-expect-error fallback handling for emulatedFormFactor
        auditStepResult.configSettings.formFactor = auditStepResult.configSettings.emulatedFormFactor;
    }
    for (var _i = 0, _a = Object.values(auditStepResult.audits); _i < _a.length; _i++) {
        var audit = _a[_i];
        // @ts-expect-error tsc rightly flags that these values shouldn't occur.
        if (audit.scoreDisplayMode === 'not_applicable' || audit.scoreDisplayMode === 'not-applicable') {
            audit.scoreDisplayMode = 'notApplicable';
        }
        if (audit.details) {
            // @ts-expect-error tsc rightly flags that these values shouldn't occur.
            if (audit.details.type === undefined || audit.details.type === 'diagnostic') {
                // @ts-expect-error details is of type never.
                audit.details.type = 'debugdata';
            }
        }
    }
    if (typeof auditStepResult.categories !== 'object')
        throw new Error('No categories provided.');
    var relevantAuditToMetricsMap = new Map();
    var majorVersion = auditStepResult.lighthouseVersion.split('.').map(Number)[0];
    var perfCategory = auditStepResult.categories['performance'];
    if (majorVersion < 9 && perfCategory) {
        if (!auditStepResult.categoryGroups)
            auditStepResult.categoryGroups = {};
        auditStepResult.categoryGroups['hidden'] = { title: '' };
        for (var _b = 0, _c = perfCategory.auditRefs; _b < _c.length; _b++) {
            var auditRef = _c[_b];
            if (!auditRef.group) {
                auditRef.group = 'hidden';
            }
            else if (['load-opportunities', 'diagnostics'].includes(auditRef.group)) {
                delete auditRef.group;
            }
        }
    }
    for (var _d = 0, _e = Object.values(auditStepResult.categories); _d < _e.length; _d++) {
        var category = _e[_d];
        category.auditRefs.forEach(function (metricRef) {
            if (!metricRef.relevantAudits)
                return;
            metricRef.relevantAudits.forEach(function (auditId) {
                var arr = relevantAuditToMetricsMap.get(auditId) || [];
                arr.push(metricRef);
                relevantAuditToMetricsMap.set(auditId, arr);
            });
        });
        category.auditRefs.forEach(function (auditRef) {
            var result = auditStepResult.audits[auditRef.id];
            auditRef.result = result;
            if (relevantAuditToMetricsMap.has(auditRef.id)) {
                auditRef.relevantMetrics = relevantAuditToMetricsMap.get(auditRef.id);
            }
            if (auditStepResult.stackPacks) {
                auditStepResult.stackPacks.forEach(function (pack) {
                    if (pack.descriptions[auditRef.id]) {
                        auditRef.stackPacks = auditRef.stackPacks || [];
                        auditRef.stackPacks.push({
                            title: pack.title,
                            iconDataURL: pack.iconDataURL,
                            description: pack.descriptions[auditRef.id]
                        });
                    }
                });
            }
        });
    }
    return auditStepResult;
}
function showAsPassed(audit) {
    switch (audit.scoreDisplayMode) {
        case 'manual':
        case 'notApplicable':
            return true;
        case 'error':
        case 'informative':
            return false;
        case 'numeric':
        case 'binary':
        default:
            return Number(audit.score) >= RATINGS.PASS.minScore;
    }
}
function calculateCategoryFraction(category) {
    var numPassableAudits = 0;
    var numPassed = 0;
    var numInformative = 0;
    var totalWeight = 0;
    for (var _i = 0, _a = category.auditRefs; _i < _a.length; _i++) {
        var auditRef = _a[_i];
        var auditPassed = showAsPassed(auditRef.result);
        if (auditRef.group === 'hidden' ||
            auditRef.result.scoreDisplayMode === 'manual' ||
            auditRef.result.scoreDisplayMode === 'notApplicable') {
            continue;
        }
        else if (auditRef.result.scoreDisplayMode === 'informative') {
            if (!auditPassed) {
                ++numInformative;
            }
            continue;
        }
        ++numPassableAudits;
        totalWeight += auditRef.weight;
        if (auditPassed)
            numPassed++;
    }
    return { numPassed: numPassed, numPassableAudits: numPassableAudits, numInformative: numInformative, totalWeight: totalWeight };
}
function extractStepSummary(auditStep) {
    var stepName = auditStep.name;
    var stepGatherMode = auditStep.lhr.gatherMode;
    var preparedReportResults = prepareReportResults(auditStep.lhr);
    var stepCategoriesResults = {};
    for (var _i = 0, _a = Object.values(preparedReportResults.categories); _i < _a.length; _i++) {
        var category = _a[_i];
        stepCategoriesResults[category.title] = calculateCategoryFraction(category);
    }
    return {
        stepName: stepName,
        stepGatherMode: stepGatherMode,
        stepCategoriesResults: stepCategoriesResults
    };
}
function extractStepsSummarys(auditSteps) {
    var userflowStep = [];
    for (var _i = 0, auditSteps_1 = auditSteps; _i < auditSteps_1.length; _i++) {
        var auditStep = auditSteps_1[_i];
        userflowStep.push(extractStepSummary(auditStep));
    }
    return userflowStep;
}
function extractAuditResultsSummary(auditResult) {
    var userflowName = auditResult.name;
    var auditSteps = auditResult.steps;
    var userflowSteps = extractStepsSummarys(auditSteps);
    return {
        userflowName: userflowName,
        userflowSteps: userflowSteps
    };
}
function getDisplayValue(categoryName, categoryResults) {
    var _a, _b, _c, _d;
    var displayValue = "".concat((categoryResults === null || categoryResults === void 0 ? void 0 : categoryResults[categoryName]) ?
        "".concat(((_a = categoryResults === null || categoryResults === void 0 ? void 0 : categoryResults[categoryName]) === null || _a === void 0 ? void 0 : _a.totalWeight) > 0 ? '' : '(').concat((_b = categoryResults === null || categoryResults === void 0 ? void 0 : categoryResults[categoryName]) === null || _b === void 0 ? void 0 : _b.numPassed, "/").concat((_c = categoryResults === null || categoryResults === void 0 ? void 0 : categoryResults[categoryName]) === null || _c === void 0 ? void 0 : _c.numPassableAudits).concat(((_d = categoryResults === null || categoryResults === void 0 ? void 0 : categoryResults[categoryName]) === null || _d === void 0 ? void 0 : _d.totalWeight) > 0 ? '' : ')')
        : '-');
    return displayValue;
}
function tabulateResults(step) {
    var categoryResults = step.stepCategoriesResults;
    return {
        '  Performance ': getDisplayValue('Performance', categoryResults),
        'Accessibility ': getDisplayValue('Accessibility', categoryResults),
        'Best Practices': getDisplayValue('Best Practices', categoryResults),
        '     SEO      ': getDisplayValue('SEO', categoryResults),
        '     PWA      ': getDisplayValue('PWA', categoryResults)
    };
}
function logAuditResults(auditResult) {
    var userflowResult = extractAuditResultsSummary(auditResult);
    var data = {};
    userflowResult.userflowSteps.forEach(function (step) {
        data[step.stepName] = tabulateResults(step);
    });
    console.table(data);
}
logAuditResults(auditResult);
