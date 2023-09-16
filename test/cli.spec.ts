import { test } from "mocha";
import { expect } from "chai";
import * as childProcess from "child_process";

// helper method to call execSync with dist/index.js
const run = (args: string) => {
    return childProcess.execSync(`node ./dist/src/index.js ${args}`, {
        encoding: "utf8",
    });
};

test("should print hello world", () => {
    // Run the hello command and capture the output
    const output = run(`hello`);
  
    // Check that the output is correct
    expect(output).to.equal("Hello, World!\n");
  });
  
  test("should print a greeting", () => {
    // Run the hello command and capture the output
    const output = run(`hello Rahul`);
  
    // Check that the output is correct
    expect(output).to.equal("Hello, Rahul!\n");
  });
  
  test("should perform the specified operation", () => {
    // Run the calculate command and capture the output
    const output = run(`calc 3 4 -o multiply`);
  
    // Check that the output is correct
    expect(output).to.equal("12\n");
  });
  