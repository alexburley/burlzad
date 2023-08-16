# Extend JS Errors

JS errors suck, `instanceof` doesn't work cross library. We can firm them up by extending the `Error` class.

```ts
class DefaultError extends Error {
  code: string;

  constructor(message: string, { code: string }) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
  }
}
```
