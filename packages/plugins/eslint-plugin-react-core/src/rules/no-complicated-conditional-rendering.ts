import { isOneOf, NodeType } from "@eslint-react/ast";
import { type TSESTree } from "@typescript-eslint/types";
import type { ESLintUtils } from "@typescript-eslint/utils";
import { Function as F } from "effect";
import type { ConstantCase } from "string-ts";
import { match } from "ts-pattern";

import { createRule } from "../utils";

export const RULE_NAME = "no-complicated-conditional-rendering";

export type MessageID = ConstantCase<typeof RULE_NAME>;

export default createRule<[], MessageID>({
  meta: {
    type: "problem",
    docs: {
      description: "disallow complicated conditional rendering",
      requiresTypeChecking: true,
    },
    messages: {
      NO_COMPLICATED_CONDITIONAL_RENDERING:
        "Avoid complicated conditional rendering. Extract the logic into separate elements or components.",
    },
    schema: [],
  },
  name: RULE_NAME,
  create(context) {
    const isConditionalOrLogicalExp = isOneOf([NodeType.ConditionalExpression, NodeType.LogicalExpression]);

    function isComplicatedExpression(node: TSESTree.Expression): boolean {
      return match(node)
        .with({ type: NodeType.LogicalExpression }, ({ left, right }) => {
          return isConditionalOrLogicalExp(left) || isConditionalOrLogicalExp(right);
        })
        .with({ type: NodeType.ConditionalExpression }, ({ alternate, consequent }) => {
          return isConditionalOrLogicalExp(alternate) || isConditionalOrLogicalExp(consequent);
        })
        .otherwise(F.constFalse);
    }

    return {
      "JSXExpressionContainer > ConditionalExpression"(node: TSESTree.ConditionalExpression) {
        if (isComplicatedExpression(node)) {
          context.report({
            messageId: "NO_COMPLICATED_CONDITIONAL_RENDERING",
            node,
          });
        }
      },
      "JSXExpressionContainer > LogicalExpression"(node: TSESTree.LogicalExpression) {
        if (isComplicatedExpression(node)) {
          context.report({
            messageId: "NO_COMPLICATED_CONDITIONAL_RENDERING",
            node,
          });
        }
      },
    };
  },
  defaultOptions: [],
}) satisfies ESLintUtils.RuleModule<MessageID>;
