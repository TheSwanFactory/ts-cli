import axios from "axios";
import chalk from "chalk";
import { resolvePtr } from "node:dns";
import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline';
import * as readline_promise from 'node:readline/promises';

// call external REST API
export const getAge = async (name: string) => {
    const response = await axios.get(`https://api.agify.io/?name=${name}`);
    const data = await response.data;
    console.log(`${chalk.yellow(data["name"])} - ${chalk.yellowBright(data["age"])}`);
};

// print a greeting on the console
export const askName = () => {
    const rl = readline.createInterface({ input, output });
    rl.question('Who are you? ', (name) => {
        printName(name);
        rl.close();
    });
};

export async function askPromise() {
    const rlp = readline_promise.createInterface({ input, output });
    const answer = await rlp.question('Who will promise me? ');
    printName(answer);
    rlp.close();
}


// print a greeting on the console
export const printName = (name: string) => {
    console.log(chalk.bgCyanBright.blue(`Hello, ${name || "World"}!`))
};

// perform simple math operations
export const performOperation = (
    num1: number,
    num2: number,
    options: { operation: string }
) => {
    let result: number;
    switch (options.operation) {
        case "multiply":
            result = num1 * num2;
            break;
        case "add":
            result = num1 + num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            console.error(("Invalid operation"));
            process.exit(1);
    }
    console.log(chalk.red(result));
};
