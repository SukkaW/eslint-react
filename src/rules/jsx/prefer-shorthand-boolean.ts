import { AST_NODE_TYPES as N } from "@typescript-eslint/types";

import { createEslintRule } from "../../../tools/create-eslint-rule";
import { getPropName } from "../../utils/jsx";

export const RULE_NAME = "jsx/prefer-shorthand-boolean";

type MessageID = "INVALID";

export default createEslintRule<[], MessageID>({
    name: RULE_NAME,
    meta: {
        type: "suggestion",
        docs: {
            description: "enforce boolean attributes notation in JSX",
        },
        schema: [],
        messages: {
            INVALID: "Omit boolean value for prop '{{propName}}'.",
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            JSXAttribute(node) {
                const { value } = node;
                const propName = getPropName(node);

                const hasValueTrue = value?.type === N.JSXExpressionContainer
                    && value.expression.type === N.Literal
                    && value.expression.value === true;

                if (!hasValueTrue) {
                    return;
                }

                context.report({
                    data: {
                        propName,
                    },
                    messageId: "INVALID",
                    node,
                });
            },
        };
    },
});
