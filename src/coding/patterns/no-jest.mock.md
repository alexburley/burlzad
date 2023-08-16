# No Jest.mock

Jest is a common testing library. Mocking using `jest.mock` mocks on the import level which can cause wierd issues where you import order can affect behaviour.

The alternative is use dependency injection to inject anything you want to mock into a factory function or a class constructor.

A useful library is `jest-mock-extended` which mocks the typescript interface.

```ts
// Bad
const logger = jest.mock('../../logger')

...
expect(logger.info).toHaveBeenCalledWith('Hello World')

// Good
import mock from 'jest-mock-extended'

const logger = mock<Logger>()

const myClass = new MyClass(logger)
myClass.doSomething()
expect(logger.info).toHaveBeenCalledWith('Hello World')
```
