[**@eslint-react/eff**](../README.md)

***

[@eslint-react/eff](../README.md) / isTupleOfAtLeast

# Function: isTupleOfAtLeast()

Determine if an `Array` is a tuple with at least `N` elements, narrowing down the type to `TupleOfAtLeast`.

An `Array` is considered to be a `TupleOfAtLeast` if its length is at least `N`.

## Param

The `Array` to check.

## Param

The minimum number of elements that the `Array` should have to be considered a `TupleOfAtLeast`.

## Example

```ts
import { isTupleOfAtLeast } from "effect/Predicate"

assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 3), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 2), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 4), false);

const arr: number[] = [1, 2, 3, 4];
if (isTupleOfAtLeast(arr, 3)) {
  console.log(arr);
  // ^? [number, number, number, ...number[]]
}
```

## Since

3.3.0

## Call Signature

> **isTupleOfAtLeast**\<`N`\>(`n`): \<`T`\>(`self`) => `self is [...TupleOf<N, T>[], ...T[]]`

Determine if an `Array` is a tuple with at least `N` elements, narrowing down the type to `TupleOfAtLeast`.

An `Array` is considered to be a `TupleOfAtLeast` if its length is at least `N`.

### Type Parameters

• **N** *extends* `number`

### Parameters

#### n

`N`

The minimum number of elements that the `Array` should have to be considered a `TupleOfAtLeast`.

### Returns

`Function`

#### Type Parameters

• **T**

#### Parameters

##### self

readonly `T`[]

#### Returns

`self is [...TupleOf<N, T>[], ...T[]]`

### Param

The `Array` to check.

### Param

The minimum number of elements that the `Array` should have to be considered a `TupleOfAtLeast`.

### Examples

```ts
import { isTupleOfAtLeast } from "effect/Predicate"

assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 3), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 2), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 4), false);

const arr: number[] = [1, 2, 3, 4];
if (isTupleOfAtLeast(arr, 3)) {
  console.log(arr);
  // ^? [number, number, number, ...number[]]
}
```

```ts
import { isTupleOfAtLeast } from "effect/Predicate"

assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 3), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 2), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 4), false);

const arr: number[] = [1, 2, 3, 4];
if (isTupleOfAtLeast(arr, 3)) {
  console.log(arr);
  // ^? [number, number, number, ...number[]]
}
```

### Since

3.3.0

### Since

3.3.0

## Call Signature

> **isTupleOfAtLeast**\<`T`, `N`\>(`self`, `n`): `self is [...TupleOf<N, T>[], ...T[]]`

Determine if an `Array` is a tuple with at least `N` elements, narrowing down the type to `TupleOfAtLeast`.

An `Array` is considered to be a `TupleOfAtLeast` if its length is at least `N`.

### Type Parameters

• **T**

• **N** *extends* `number`

### Parameters

#### self

readonly `T`[]

The `Array` to check.

#### n

`N`

The minimum number of elements that the `Array` should have to be considered a `TupleOfAtLeast`.

### Returns

`self is [...TupleOf<N, T>[], ...T[]]`

### Param

The `Array` to check.

### Param

The minimum number of elements that the `Array` should have to be considered a `TupleOfAtLeast`.

### Examples

```ts
import { isTupleOfAtLeast } from "effect/Predicate"

assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 3), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 2), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 4), false);

const arr: number[] = [1, 2, 3, 4];
if (isTupleOfAtLeast(arr, 3)) {
  console.log(arr);
  // ^? [number, number, number, ...number[]]
}
```

```ts
import { isTupleOfAtLeast } from "effect/Predicate"

assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 3), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 2), true);
assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 4), false);

const arr: number[] = [1, 2, 3, 4];
if (isTupleOfAtLeast(arr, 3)) {
  console.log(arr);
  // ^? [number, number, number, ...number[]]
}
```

### Since

3.3.0

### Since

3.3.0
