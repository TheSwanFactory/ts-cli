import { test } from "mocha";
import { expect } from "chai";
import * as childProcess from "child_process";

// helper method to call execSync
const exec = (command: string) => {
    return childProcess.execSync(command, {encoding: "utf8"});
};

const run = (args: string) => {
    return exec(`ts-cli ${args}`);
};

before(() => {
    exec(`npm install -g`);
    console.log("Installed CLI");
});

after(() => {
    exec(`npm uninstall -g`);
    console.log("Uninstalled CLI");
});

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

test("should print the typical age for a given name", () => {
    // Run the age command and capture the output
    const output = run(`age Rahul`);

    // Check that the output is correct
    expect(output).to.equal("Rahul - 40\n");
});
