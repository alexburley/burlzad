# Do not over nest tests

Picked this one up from python coding. Nesting makes it so hard to read and provided we favour mocking via dependency injection, we can achieve the same result with minimal nesting and mocking.

```ts
// Bad
describe("Given X", () => {
  beforeEach(() => {
    doX();
  });
  describe("When Y", () => {
    beforeEach(() => {
      doY();
    });

    test("Should do Z", () => {
      expect(doZ()).toBe(true);
    });

    test("Should do A", () => {
      expect(doA()).toBe(true);
    });
  });
});

// GOOD
test("doZ() Given X and Y, should return true", () => {
  doX();
  doY();
  expect(doZ()).toBe(true);
});

test("doA() Given X and Y, should return true", () => {
  doX();
  doY();
  expect(doA()).toBe(true);
});
```
