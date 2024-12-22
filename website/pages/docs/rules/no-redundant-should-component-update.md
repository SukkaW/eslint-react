# no-redundant-should-component-update

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/no-redundant-should-component-update
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/no-redundant-should-component-update
```

**Features**

`🔍`

**Presets**

- `core`
- `recommended`
- `recommended-typescript`
- `recommended-type-checked`

**Implementation**:

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-redundant-should-component-update.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-redundant-should-component-update.spec.ts)
- [Docs source](https://github.com/Rel1cx/eslint-react/tree/main/website/pages/docs/rules/no-redundant-should-component-update.md)

## What it does

Prevents usage of `shouldComponentUpdate` when extending `React.PureComponent`.

While having `shouldComponentUpdate` will still work, it becomes pointless to extend `React.PureComponent`.

## Examples

### Failing

```tsx
import React from "react";

class Example extends React.PureComponent {
  // 'Example' does not need 'shouldComponentUpdate' when extending 'React.PureComponent'.
  shouldComponentUpdate() {
    // do check
    return true;
  }

  render() {
    return <div>Radical!</div>;
  }
}
```

### Passing

```tsx
import React from "react";

class Example extends React.Component {
  shouldComponentUpdate() {
    // do check
    return true;
  }

  render() {
    return <div>Radical!</div>;
  }
}
```