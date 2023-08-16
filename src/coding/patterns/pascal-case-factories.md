# Factory Functions

We use factory functions to generate new objects.

When writing a simple factory function. For example, to generate test data or to generate a lambda handler, use Pascal Case.

By using Pascal Case, we can easily distinguish between a factory function and a regular function.

```ts
// Bad
const appointmentDummy = { id: uuid(), ...props };
const createAppointmentDummy = () => ({ id: uuid(), ...props });

// Good
const AppointmentDummy = () => ({ id: uuid(), ...props });
```
