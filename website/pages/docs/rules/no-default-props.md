# no-default-props

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/no-default-props
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/no-default-props
```

**Features**

`🔍`

**Presets**

- `core`
- `recommended`
- `recommended-typescript`
- `recommended-type-checked`

**Implementation**:

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-default-props.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-default-props.spec.ts)
- [Docs source](https://github.com/Rel1cx/eslint-react/tree/main/website/pages/docs/rules/no-default-props.md)

## What it does

Disallows using `defaultProps` property in favor of ES6 default parameters.

The `defaultProps` will be removed from functional components in React 19 in place of ES6 default parameters. If you’re using `defaultProps`, it is recommend to migrate to ES6 default parameters.

## Examples

### Failing

```tsx
import React from "react";

function ExampleComponent(props) {
  return <div>{props.name}</div>;
}

ExampleComponent.defaultProps = {
  name: "John Doe",
};
```

### Passing

```tsx
import React from "react";

interface ExampleComponentProps {
  name: string;
}

function ExampleComponent({ name = "John Doe" }: ExampleComponentProps) {
  return <div>{name}</div>;
}
```