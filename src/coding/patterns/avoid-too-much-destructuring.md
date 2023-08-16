# Avoid excessive destructuring

We can get carried away with code reuse and destructuring. This can lead to code that is hard to read and maintain.

Avoid destructuring if you are nested destructuring or it forces the code over multiple lines.

Avoid destructuring functions from other files unless the function name is namespaced. This makes code easier to read.

```ts
// Bad
const {
  component: { propA, propB },
  foo,
  bar,
  baz,
} = props;

doSomething(propA, propB, foo, bar, baz);

// Ok
const { component } = props;
doSomething(component.propA, component.propB, rest.foo, rest.bar, rest.baz);

// Gpood
doSomething(
  props.component.propA,
  props.component.propB,
  props.foo,
  props.bar,
  props.baz
);
```
