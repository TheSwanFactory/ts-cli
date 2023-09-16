import { before, after, test } from "mocha";
import { expect } from "chai";
import * as path from "path";
import * as childProcess from "child_process";

before(() => {
  childProcess.execSync(`npm install -g`, { cwd: path.join(__dirname, "..") });
  console.log("Installed CLI");
});

after(() => {
  childProcess.execSync(`npm uninstall -g`, { cwd: path.join(__dirname, "..") });
  console.log("Uninstalled CLI");
});

test("should print hello world", () => {
    // Run the hello command and capture the output
    const output = childProcess.execSync(`ts-cli hello`, {
      encoding: "utf8",
    });
  
    // Check that the output is correct
    expect(output).to.equal("Hello, World!\n");
  });
  
  test("should print a greeting", () => {
    // Run the hello command and capture the output
    const output = childProcess.execSync(`ts-cli hello Rahul`, {
      encoding: "utf8",
    });
  
    // Check that the output is correct
    expect(output).to.equal("Hello, Rahul!\n");
  });
  
  test("should perform the specified operation", () => {
    // Run the calculate command and capture the output
    const output = childProcess.execSync(`ts-cli calc 3 4 -o multiply`, {
      encoding: "utf8",
    });
  
    // Check that the output is correct
    expect(output).to.equal("12\n");
  });
  