import dedent from "dedent";

import { allValid, ruleTester } from "../../../../../test";
import rule, { RULE_NAME } from "./no-unsafe-component-will-mount";

ruleTester.run(RULE_NAME, rule, {
  invalid: [
    {
      code: dedent`
        import React from "react";

        class Foo extends React.Component {

          UNSAFE_componentWillMount() {}

          render() {
            return <div />;
          }
        }
      `,
      errors: [
        {
          messageId: "NO_UNSAFE_COMPONENT_WILL_MOUNT",
        },
      ],
    },
    {
      code: dedent`
        import React from "react";

        class Foo extends React.PureComponent {

          UNSAFE_componentWillMount() {}

          render() {
            return <div />;
          }
        }
      `,
      errors: [
        {
          messageId: "NO_UNSAFE_COMPONENT_WILL_MOUNT",
        },
      ],
    },
    {
      code: dedent`
        import { Component } from "react";

        class Foo extends Component {

          UNSAFE_componentWillMount() {}

          render() {
            return <div />;
          }
        }
      `,
      errors: [
        {
          messageId: "NO_UNSAFE_COMPONENT_WILL_MOUNT",
        },
      ],
    },
    {
      code: dedent`
        import { PureComponent } from "react";

        class Foo extends PureComponent {

          UNSAFE_componentWillMount() {}

          render() {
            return <div />;
          }
        }
      `,
      errors: [
        {
          messageId: "NO_UNSAFE_COMPONENT_WILL_MOUNT",
        },
      ],
    },
  ],
  valid: [
    ...allValid,
    dedent`
      class Foo extends Bar {
        componentWillMount() {}
      }
    `,
    dedent`
      import React from "react";

      class Foo extends React.Component {

        componentWillMount() {}

        render() {
          return <div />;
        }
      }
    `,
    dedent`
      import React from "react";

      class Foo extends React.PureComponent {

        componentWillMount() {}

        render() {
          return <div />;
        }
      }
    `,
  ],
});
