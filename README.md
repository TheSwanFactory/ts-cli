# ts-cli
Demo project to create/test CLIs written using TypeScript

It is surprisingly difficult to find a currently-working example of how
to create and test Command-Line Interfaces (CLIs) written in TypeScript.

# Purpose

This project updates the
[How to Create a Testable CLI using TypeScript?](https://www.realpythonproject.com/how-to-create-a-testable-cli-using-typescript/)
from Jan 2023 with various fixes that were not obvious (at least to me).

These include:

*  Restricting to "chalk": "^4.1.2"

## Functionality

Use `npm run` to see all commands:

```bash
$ npm run hello
Hello, World!
$ npm run hello Universe!
Hello, Universe!!
$ npm run calc -o multiply 10 16 # or: add | divide
160
$ npm run age Ernie # Use axios to call the agify API 
Ernie - 74
```
