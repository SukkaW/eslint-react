# no-set-state-in-component-did-update

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/no-set-state-in-component-did-update
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/no-set-state-in-component-did-update
```

**Features**

`🔍`

**Presets**

- `core`
- `recommended`
- `recommended-typescript`
- `recommended-type-checked`

**Implementation**:

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-set-state-in-component-did-update.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-set-state-in-component-did-update.spec.ts)
- [Docs source](https://github.com/Rel1cx/eslint-react/tree/main/website/pages/docs/rules/no-set-state-in-component-did-update.md)

## What it does

Disallows calling `this.setState` in `componentDidUpdate` outside of functions, such as callbacks.

Updating the state after a component mount will trigger a second `render()` call and can lead to property/layout thrashing.

## Examples

### Failing

```tsx
import React from "react";

interface ExampleProps {}

interface ExampleState {
  name: string;
}

class Example extends React.Component<ExampleProps, ExampleState> {
  componentDidUpdate() {
    this.setState({ name: "John" });
    //   ^^^^^^^^^^^^^^^^^^^^^^^^^^
    //   - Do not call `this.setState` in `componentDidUpdate` outside of functions, such as callbacks.
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
```