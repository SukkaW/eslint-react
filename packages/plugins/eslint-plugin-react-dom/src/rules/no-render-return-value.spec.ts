import dedent from "dedent";

import { allValid, ruleTester } from "../../../../../test";
import rule, { RULE_NAME } from "./no-render-return-value";

ruleTester.run(RULE_NAME, rule, {
  invalid: [
    {
      code: "var Hello = ReactDOM.render(<div />, document.body);",
      errors: [
        {
          messageId: "NO_RENDER_RETURN_VALUE",
        },
      ],
    },
    {
      code: `
        var o = {
          inst: ReactDOM.render(<div />, document.body)
        };
      `,
      errors: [
        {
          messageId: "NO_RENDER_RETURN_VALUE",
        },
      ],
    },
    {
      code: `
        function render () {
          return ReactDOM.render(<div />, document.body)
        }
      `,
      errors: [
        {
          messageId: "NO_RENDER_RETURN_VALUE",
        },
      ],
    },
    {
      code: "var render = (a, b) => ReactDOM.render(a, b)",
      errors: [
        {
          messageId: "NO_RENDER_RETURN_VALUE",
        },
      ],
    },
    {
      code: "this.o = ReactDOM.render(<div />, document.body);",
      errors: [
        {
          messageId: "NO_RENDER_RETURN_VALUE",
        },
      ],
    },
    {
      code: "var v; v = ReactDOM.render(<div />, document.body);",
      errors: [
        {
          messageId: "NO_RENDER_RETURN_VALUE",
        },
      ],
    },
  ],
  valid: [
    ...allValid,
    "ReactDOM.render(<div />, document.body);",
    dedent`
      let node;
      ReactDOM.render(<div ref={ref => node = ref}/>, document.body);
    `,
    "var foo = render(<div />, root)",
    "var foo = ReactDom.renderder(<div />, root)",
  ],
});
