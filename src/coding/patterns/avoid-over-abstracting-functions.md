# Avoid over abstracting functions

We can get carried away with code reuse and destructuring. This can lead to code that is hard to read and maintain.

If you have a long function where the code is linear with minimal control flow. It can be easier to label with comments and leave it as is.

You might argue comments get out of date, but if we have solid tests we don't need to worry. It makes it easier to read and maintain.
