import type { RulePreset } from "@eslint-react/types";
import react from "eslint-plugin-react-x";

export const name = "@eslint-react/core";

export const rules = {
  "@eslint-react/ensure-forward-ref-using-ref": "warn",
  "@eslint-react/jsx-no-duplicate-props": "warn",
  "@eslint-react/jsx-uses-vars": "warn",
  "@eslint-react/no-access-state-in-setstate": "error",
  "@eslint-react/no-array-index-key": "warn",
  "@eslint-react/no-children-count": "warn",
  "@eslint-react/no-children-for-each": "warn",
  "@eslint-react/no-children-map": "warn",
  "@eslint-react/no-children-only": "warn",
  "@eslint-react/no-children-to-array": "warn",
  "@eslint-react/no-clone-element": "warn",
  "@eslint-react/no-comment-textnodes": "warn",
  "@eslint-react/no-component-will-mount": "error",
  "@eslint-react/no-component-will-receive-props": "error",
  "@eslint-react/no-component-will-update": "error",
  "@eslint-react/no-create-ref": "error",
  "@eslint-react/no-default-props": "error",
  "@eslint-react/no-direct-mutation-state": "error",
  "@eslint-react/no-duplicate-key": "error",
  "@eslint-react/no-missing-key": "error",
  "@eslint-react/no-nested-components": "error",
  "@eslint-react/no-prop-types": "error",
  "@eslint-react/no-redundant-should-component-update": "error",
  "@eslint-react/no-set-state-in-component-did-mount": "warn",
  "@eslint-react/no-set-state-in-component-did-update": "warn",
  "@eslint-react/no-set-state-in-component-will-update": "warn",
  "@eslint-react/no-string-refs": "error",
  "@eslint-react/no-unsafe-component-will-mount": "warn",
  "@eslint-react/no-unsafe-component-will-receive-props": "warn",
  "@eslint-react/no-unsafe-component-will-update": "warn",
  "@eslint-react/no-unstable-context-value": "warn",
  "@eslint-react/no-unstable-default-props": "warn",
  "@eslint-react/no-unused-class-component-members": "warn",
  "@eslint-react/no-unused-state": "warn",
} as const satisfies RulePreset;

export const plugins = {
  "@eslint-react": react,
};

export const settings = {
  "react-x": react.DEFAULT_ESLINT_REACT_SETTINGS,
};