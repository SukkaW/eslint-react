import dedent from "dedent";

import { allValid, ruleTester } from "../../../../../test";
import rule, { RULE_NAME } from "./no-children-in-void-dom-elements";

ruleTester.run(RULE_NAME, rule, {
  invalid: [
    {
      code: "<br>Foo</br>;",
      errors: [
        {
          data: { element: "br" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: '<br children="Foo" />;',
      errors: [
        {
          data: { element: "br" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: '<img {...props} children="Foo" />;',
      errors: [
        {
          data: { element: "img" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: '<br dangerouslySetInnerHTML={{ __html: "Foo" }} />;',
      errors: [
        {
          data: { element: "br" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: 'React.createElement("br", {}, "Foo");',
      errors: [
        {
          data: { element: "br" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: 'React.createElement("br", { children: "Foo" });',
      errors: [
        {
          data: { element: "br" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: 'React.createElement("br", { dangerouslySetInnerHTML: { __html: "Foo" } });',
      errors: [
        {
          data: { element: "br" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: dedent`
        import React, {createElement} from "react";
        createElement("img", {}, "Foo");
      `,
      errors: [
        {
          data: { element: "img" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: dedent`
        import React, {createElement} from "react";
        createElement("img", { children: "Foo" });
      `,
      errors: [
        {
          data: { element: "img" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
    {
      code: dedent`
        import React, {createElement} from "react";
        createElement("img", { dangerouslySetInnerHTML: { __html: "Foo" } });
      `,
      errors: [
        {
          data: { element: "img" },
          messageId: "NO_CHILDREN_IN_VOID_DOM_ELEMENTS",
        },
      ],
    },
  ],
  valid: [
    ...allValid,
    "<div>Foo</div>;",
    '<div children="Foo" />;',

    '<div dangerouslySetInnerHTML={{ __html: "Foo" }} />;',

    'React.createElement("div", {}, "Foo");',

    'React.createElement("div", { children: "Foo" });',

    'React.createElement("div", { dangerouslySetInnerHTML: { __html: "Foo" } });',

    'document.createElement("img");',

    'React.createElement("img");',

    "React.createElement();",

    "document.createElement();",

    dedent`
      const props = {};
      React.createElement("img", props);
    `,

    dedent`
      import React, {createElement} from "react";
      createElement("div");
    `,

    dedent`
      import React, {createElement} from "react";
      createElement("img");
    `,

    dedent`
      import React, {createElement, PureComponent} from "react";
      class Button extends PureComponent {
        handleClick(ev) {
          ev.preventDefault();
        }
        render() {
          return <div onClick={this.handleClick}>Hello</div>;
        }
      }
    `,
  ],
});
