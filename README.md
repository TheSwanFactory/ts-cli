# ts-cli
Demo project to create/test CLIs written using TypeScript

It is surprisingly difficult to find a currently-working example of how
to create and test Command-Line Interfaces (CLIs) written in TypeScript.

This project updates the
[How to Create a Testable CLI using TypeScript?](https://www.realpythonproject.com/how-to-create-a-testable-cli-using-typescript/)
from Jan 2023 with various fixes that were not obvious (at least to me).

These include:

* Restricting "chalk" to "^4.1.2"
* Avoiding the confusingly-named 'npm run install'
* import { expect } from "chai";
* "test" : "mocha --require ts-node/register test/**/*.ts"
* Add node GitHub Action (tests dist/src/index.js, not installed version) 


## Usage

```bash
$ npm run ts-cli-install
$ ts-cli hello
Hello, World!
$ ts-cli hello Universe!
Hello, Universe!!
$ ts-cli calc -o multiply 10 16 # or: add | divide
160
$ ts-cli age Ernie # Use axios to call the agify API 
Ernie - 74
```
