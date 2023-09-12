import { performOperation, printName, } from "./utils";
import { Command } from "commander";

const program = new Command();

program
    .command("Hello")
    .argument("[name]")
    .action(printName);

program
    .command("calc")
    .argument("<num1>")
    .argument("<num2>")
    .option("-o, --operation <operation>", "Operation to perform")
    .action(performOperation);
    
program.parse(process.argv);