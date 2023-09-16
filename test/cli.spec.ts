import { test } from "mocha";
import { expect } from "chai";
import * as childProcess from "child_process";

test("should print hello world", () => {
    // Run the hello command and capture the output
    const output = childProcess.execSync(`node dist/index.js hello`, {
      encoding: "utf8",
    });
  
    // Check that the output is correct
    expect(output).to.equal("Hello, World!\n");
  });
  
  test("should print a greeting", () => {
    // Run the hello command and capture the output
    const output = childProcess.execSync(`node dist/index.js hello Rahul`, {
      encoding: "utf8",
    });
  
    // Check that the output is correct
    expect(output).to.equal("Hello, Rahul!\n");
  });
  
  test("should perform the specified operation", () => {
    // Run the calculate command and capture the output
    const output = childProcess.execSync(`node dist/index.js calc 3 4 -o multiply`, {
      encoding: "utf8",
    });
  
    // Check that the output is correct
    expect(output).to.equal("12\n");
  });
  