import { printName } from "./utils";
import { Command } from "commander";

const program = new Command();

program
    .command("Hello")
    .argument("[name]")
    .action(printName);

program.parse(process.argv);