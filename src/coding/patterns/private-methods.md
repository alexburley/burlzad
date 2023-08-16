# Private methods

- Belong at the bottom of a class
- Should not be tested or JSDocced (unless they are used by subclasses)
- Prefix with `private _myMethodName` to indicate usage and lean on TS to not expose to collaborators.
