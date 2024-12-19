import * as AST from "@eslint-react/ast";
import { O } from "@eslint-react/eff";
import type { RuleContext } from "@eslint-react/types";
import type { TSESTree } from "@typescript-eslint/types";
import { AST_NODE_TYPES } from "@typescript-eslint/types";

import { isReactHookCallWithNameLoose } from "../hook";
import { isForwardRefCall, isMemoCall } from "../utils";

function isComponentWrapperCall(node: TSESTree.Node, context: RuleContext) {
  if (node.type !== AST_NODE_TYPES.CallExpression) return false;
  return isMemoCall(node, context)
    || isForwardRefCall(node, context)
    || isReactHookCallWithNameLoose(node)("useCallback");
}

export function getFunctionComponentIdentifier(
  node: AST.TSESTreeFunction,
  context: RuleContext,
): O.Option<TSESTree.Identifier | TSESTree.Identifier[]> {
  const functionId = AST.getFunctionIdentifier(node);
  if (O.isSome(functionId)) return functionId;
  const { parent } = node;
  // Get function component identifier from `const Component = memo(() => {});`
  if (
    parent.type === AST_NODE_TYPES.CallExpression
    && isComponentWrapperCall(parent, context)
    && parent.parent.type === AST_NODE_TYPES.VariableDeclarator
    && parent.parent.id.type === AST_NODE_TYPES.Identifier
  ) {
    return O.some(parent.parent.id);
  }
  // Get function component identifier from `const Component = memo(forwardRef(() => {}));`
  if (
    parent.type === AST_NODE_TYPES.CallExpression
    && isComponentWrapperCall(parent, context)
    && parent.parent.type === AST_NODE_TYPES.CallExpression
    && isComponentWrapperCall(parent.parent, context)
    && parent.parent.parent.type === AST_NODE_TYPES.VariableDeclarator
    && parent.parent.parent.id.type === AST_NODE_TYPES.Identifier
  ) {
    return O.some(parent.parent.parent.id);
  }
  return O.none();
}
