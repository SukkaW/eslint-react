# no-children-to-array

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/no-children-to-array
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/no-children-to-array
```

**Features**

`🔍`

**Presets**

- `core`
- `recommended`
- `recommended-typescript`
- `recommended-type-checked`

**Implementation**:

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-children-to-array.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-children-to-array.spec.ts)
- [Docs source](https://github.com/Rel1cx/eslint-react/tree/main/website/pages/docs/rules/no-children-to-array.md)

## What it does

Prevents the use of `Children.toArray` from the `react` package.

Using `Children.toArray` is uncommon and can lead to fragile code. [See common alternatives](https://react.dev/reference/react/Children#alternatives).

## Examples

### Failing

```tsx
import React, { Children } from "react";

interface ExampleProps {
  children: React.ReactNode;
}

function Example({ children }: ExampleProps) {
  const result = Children.toArray(children);
  result.reverse();
  // ...
}
```

## Further Reading

- [React: Legacy React APIs Children](https://react.dev/reference/react/Children)