import type { RulePreset } from "@eslint-react/types";
// workaround for @typescript-eslint/utils's TS2742 error.
import type { ESLintUtils } from "@typescript-eslint/utils";

import { name } from "../package.json";
import debugClassComponent from "./rules/debug/class-component";
import debugFunctionComponent from "./rules/debug/function-component";
import jsxNoArrayIndexKey from "./rules/jsx/no-array-index-key";
import jsxNoDuplicateKey from "./rules/jsx/no-duplicate-key";
import jsxNoLeakedConditionalRendering from "./rules/jsx/no-leaked-conditional-rendering";
import jsxNoMissingKey from "./rules/jsx/no-missing-key";
import jsxNoMisusedCommentInTextNode from "./rules/jsx/no-misused-comment-in-textnode";
import jsxNoScriptUrl from "./rules/jsx/no-script-url";
import jsxPreferShorthandJsxBoolean from "./rules/jsx/prefer-shorthand-boolean";
import namingConventionFilename from "./rules/naming-convention/filename";
import namingConventionFilenameExtension from "./rules/naming-convention/filename-extension";
import noConstructedContextValue from "./rules/no-constructed-context-value";
import noDangerouslySetInnerHTML from "./rules/no-dangerously-set-innerhtml";
import noDangerouslySetInnerHTMLWithChildren from "./rules/no-dangerously-set-innerhtml-with-children";
import noDeprecatedStringRefs from "./rules/no-string-refs";
import noUnstableDefaultProps from "./rules/no-unstable-default-props";
import noUnstableNestedComponents from "./rules/no-unstable-nested-components";

const rules = {
    "debug/class-component": "warn",
    "debug/function-component": "warn",
    "jsx/no-array-index-key": "error",
    "jsx/no-duplicate-key": "error",
    "jsx/no-leaked-conditional-rendering": "error",
    "jsx/no-missing-key": "error",
    "jsx/no-misused-comment-in-textnode": "warn",
    "jsx/prefer-shorthand-boolean": "warn",
    "naming-convention/filename": "warn",
    "naming-convention/filename-extension": "warn",
    "no-constructed-context-value": "error",
    "no-dangerously-set-innerhtml": "error",
    "no-dangerously-set-innerhtml-with-children": "error",
    "no-string-refs": "error",
    "no-unstable-default-props": "error",
    "no-unstable-nested-components": "error",
} as const satisfies RulePreset;

const rulesEntries = Object.entries(rules);

const recommendedRules = {
    "jsx/no-array-index-key": "error",
    "jsx/no-duplicate-key": "error",
    "jsx/no-leaked-conditional-rendering": "error",
    "jsx/no-missing-key": "error",
    "jsx/no-misused-comment-in-textnode": "warn",
    "jsx/no-script-url": "error",
    "jsx/prefer-shorthand-boolean": "warn",
    "no-constructed-context-value": "error",
    "no-dangerously-set-innerhtml": "error",
    "no-dangerously-set-innerhtml-with-children": "error",
    "no-string-refs": "error",
    "no-unstable-default-props": "error",
    "no-unstable-nested-components": "error",
} as const satisfies RulePreset;

const allRules: RulePreset = Object.fromEntries(rulesEntries.filter(([key]) => !key.startsWith("debug/")));
const offRules: RulePreset = Object.fromEntries(rulesEntries.map(([key]) => [key, "off"]));
const jsxRules: RulePreset = Object.fromEntries(rulesEntries.filter(([key]) => key.startsWith("jsx/")));
const debugRules: RulePreset = Object.fromEntries(rulesEntries.filter(([key]) => key.startsWith("debug/")));

const createConfig = (rules: RulePreset) => {
    return {
        rules: Object.fromEntries(Object.entries(rules).map(([key, value]) => [`@eslint-react/${key}`, value])),
    };
};

export default {
    name,
    configs: {
        all: createConfig(allRules),
        debug: createConfig(debugRules),
        jsx: createConfig(jsxRules),
        off: createConfig(offRules),
        recommended: createConfig(recommendedRules),
        "recommended-type-checked": createConfig(recommendedRules),
    },
    rules: {
        "debug/class-component": debugClassComponent,
        "debug/function-component": debugFunctionComponent,
        "jsx/no-array-index-key": jsxNoArrayIndexKey,
        "jsx/no-duplicate-key": jsxNoDuplicateKey,
        "jsx/no-leaked-conditional-rendering": jsxNoLeakedConditionalRendering,
        "jsx/no-missing-key": jsxNoMissingKey,
        "jsx/no-misused-comment-in-textnode": jsxNoMisusedCommentInTextNode,
        "jsx/no-script-url": jsxNoScriptUrl,
        "jsx/prefer-shorthand-boolean": jsxPreferShorthandJsxBoolean,
        "naming-convention/filename": namingConventionFilename,
        "naming-convention/filename-extension": namingConventionFilenameExtension,
        "no-constructed-context-value": noConstructedContextValue,
        "no-dangerously-set-innerhtml": noDangerouslySetInnerHTML,
        "no-dangerously-set-innerhtml-with-children": noDangerouslySetInnerHTMLWithChildren,
        "no-string-refs": noDeprecatedStringRefs,
        "no-unstable-default-props": noUnstableDefaultProps,
        "no-unstable-nested-components": noUnstableNestedComponents,
    },
} as const;
