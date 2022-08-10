// I <3 TypeScript <3

// The correct interface is located at https://github.com/GoogleChrome/lighthouse/blob/03af4038e0f0168c8d93b8706e8d287592704008/types/lhr/flow.d.ts#L22-L30

const fs = require('fs');
import FlowResult from 'lighthouse/types/lhr/flow';
import lhr from 'lighthouse/types/lhr/lhr';

const auditResult: FlowResult = JSON.parse(fs.readFileSync('./measures/scroll-to-buttom.uf.json'));

const PASS_THRESHOLD = 0.9;

const RATINGS = {
    PASS: {label: 'pass', minScore: PASS_THRESHOLD},
    AVERAGE: {label: 'average', minScore: 0.5},
    FAIL: {label: 'fail'},
    ERROR: {label: 'error'},
};

interface UserflowAuditResults {
    userflowName: string;
    userflowSteps: UserflowStep[]; 
};

interface UserflowStep {
    stepName: string;
    stepGatherMode: string;
    stepCategoriesResults: StepCategoriesResults[];
}

interface StepCategoriesResults {
    category: string;
    fractionalCategoryResults: fractionalCategoryResults;
}

interface fractionalCategoryResults {
    numPassed: number;
    numPassableAudits: number;
    numInformative: number;
    totalWeight: number;
}

function prepareReportResults(auditStepResult: lhr) {
    if (!auditStepResult.configSettings.locale) {
        auditStepResult.configSettings.locale = 'en';
    }
    if (!auditStepResult.configSettings.formFactor) {
        // @ts-expect-error fallback handling for emulatedFormFactor
        auditStepResult.configSettings.formFactor = auditStepResult.configSettings.emulatedFormFactor;
    }

    for (const audit of Object.values(auditStepResult.audits)) {
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

    if (typeof auditStepResult.categories !== 'object') throw new Error('No categories provided.');

    const relevantAuditToMetricsMap = new Map();

    const [majorVersion] = auditStepResult.lighthouseVersion.split('.').map(Number);
    const perfCategory = auditStepResult.categories['performance'];
    if (majorVersion < 9 && perfCategory) {
        if (!auditStepResult.categoryGroups) auditStepResult.categoryGroups = {};
        auditStepResult.categoryGroups['hidden'] = {title: ''};
        for (const auditRef of perfCategory.auditRefs) {
            if (!auditRef.group) {
                auditRef.group = 'hidden';
            } else if (['load-opportunities', 'diagnostics'].includes(auditRef.group)) {
                delete auditRef.group;
            }
        }
    }

    for (const category of Object.values(auditStepResult.categories)) {
        category.auditRefs.forEach((metricRef) => {
            if (!metricRef.relevantAudits) return;
            metricRef.relevantAudits.forEach((auditId) => {
                const arr = relevantAuditToMetricsMap.get(auditId) || [];
                arr.push(metricRef);
                relevantAuditToMetricsMap.set(auditId, arr);
            });
        });

        category.auditRefs.forEach((auditRef: any) => {
            const result = auditStepResult.audits[auditRef.id];
            auditRef.result = result;
            if (relevantAuditToMetricsMap.has(auditRef.id)) {
                auditRef.relevantMetrics = relevantAuditToMetricsMap.get(auditRef.id);
            }
            if (auditStepResult.stackPacks) {
                auditStepResult.stackPacks.forEach((pack) => {
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
        })
    }
    return auditStepResult;
}

function showAsPassed(audit: any) {
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

function calculateCategoryFraction(category: any) {
    let numPassableAudits = 0;
    let numPassed = 0;
    let numInformative = 0;
    let totalWeight = 0;

    for (const auditRef of category.auditRefs) {
        const auditPassed = showAsPassed(auditRef.result);
        if (auditRef.group === 'hidden' ||
            auditRef.result.scoreDisplayMode === 'manual' ||
            auditRef.result.scoreDisplayMode === 'notApplicable') {
            continue;
        } else if (auditRef.result.scoreDisplayMode === 'informative') {
            if (!auditPassed) {
                ++numInformative;
            }
            continue;
        }
        ++numPassableAudits;
        totalWeight += auditRef.weight;
        if (auditPassed) numPassed++;
    }
    return {numPassed, numPassableAudits, numInformative, totalWeight};
}

function extractStepSummary(auditStep: FlowResult.Step): UserflowStep {
    const stepName = auditStep.name;
    const stepGatherMode = auditStep.lhr.gatherMode;
    const preparedReportResults = prepareReportResults(auditStep.lhr);
    const  stepCategoriesResults: any = {};

    for (const category of Object.values(preparedReportResults.categories)) {
        stepCategoriesResults[category.title] = calculateCategoryFraction(category);
    }

    return {
        stepName: stepName,
        stepGatherMode: stepGatherMode,
        stepCategoriesResults: stepCategoriesResults
    };
}

function extractStepsSummarys(auditSteps: FlowResult.Step[]): UserflowStep[] {
    const userflowStep: UserflowStep[] = [];
    for (const auditStep of auditSteps) {
        userflowStep.push(extractStepSummary(auditStep));
    }
    return userflowStep;
}

function extractAuditResultsSummary(auditResult: FlowResult): UserflowAuditResults {
    const userflowName = auditResult.name;
    const auditSteps = auditResult.steps;
    const userflowSteps = extractStepsSummarys(auditSteps);
    return {
        userflowName: userflowName,
        userflowSteps: userflowSteps
    }
}

function getDisplayValue(categoryName: string, categoryResults: any) {
    const displayValue = `${
        categoryResults?.[categoryName] ? 
        `${categoryResults?.[categoryName]?.totalWeight > 0 ? '' : '('}${
            categoryResults?.[categoryName]?.numPassed
        }/${
            categoryResults?.[categoryName]?.numPassableAudits
        }${categoryResults?.[categoryName]?.totalWeight > 0 ? '' : ')'}`
        : '-'
    }`
    return displayValue
}

function tabulateResults(step: UserflowStep) {
    const categoryResults = step.stepCategoriesResults;
    return {
        '  Performance ': getDisplayValue('Performance', categoryResults),
        'Accessibility ': getDisplayValue('Accessibility', categoryResults),
        'Best Practices': getDisplayValue('Best Practices', categoryResults),
        '     SEO      ': getDisplayValue('SEO', categoryResults),
        '     PWA      ': getDisplayValue('PWA', categoryResults),
    }
}

function logAuditResults(auditResult: FlowResult): void {
    const userflowResult = extractAuditResultsSummary(auditResult);
    const data: any = {}
    userflowResult.userflowSteps.forEach((step) => {
        data[step.stepName] = tabulateResults(step);
    });
    console.table(data);
}

logAuditResults(auditResult);