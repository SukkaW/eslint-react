# prefer-destructuring-assignment

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/prefer-destructuring-assignment
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/prefer-destructuring-assignment
```

**Features**

`🔍`

**Implementation**:

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/prefer-destructuring-assignment.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/prefer-destructuring-assignment.spec.ts)
- [Docs source](https://github.com/Rel1cx/eslint-react/tree/main/website/pages/docs/rules/prefer-destructuring-assignment.md)

## What it does

Enforces the use of destructuring assignment over property assignment.

## Examples

This rule aims to enforce the use of destructuring assignment over property assignment.

### Failing

```tsx
import React from "react";

interface ExampleProps {
  items: string[];
}

function Example(props: ExampleProps) {
  const items = props.items;
  //            ^^^^^^^^^^^
  //            - Use destructuring assignment for props.

  return <div>{items}</div>;
}
```

```tsx
import React from "react";

interface ExampleProps {
  items: string[];
}

function Example(props: ExampleProps) {
  return <div>{props.items}</div>;
  //           ^^^^^^^^^^^
  //           - Use destructuring assignment for props.
}
```

### Passing

```tsx
import React from "react";

interface ExampleProps {
  items: string[];
}

function Example(props: ExampleProps) {
  const { items } = props;

  return <div>{items}</div>;
}
```

```tsx
import React from "react";

interface ExampleProps {
  items: string[];
}

function Example({ items }: ExampleProps) {
  return <div>{items}</div>;
}
```

```tsx
import React from "react";

interface ExampleProps {
  items: string[];
}

function Example({ items, ...rest }: ExampleProps) {
  return <div {...rest}>{items}</div>;
}
```

## Further Reading

- [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [React: passing-props-to-a-component](https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component)