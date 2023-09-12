import axios from "axios";

export const getAge = async (name: string) => {
    const response = await axios.get(`https://api.agify.io/?name=${name}`);
    const data = await response.data;
    console.log(`${(data["name"])} - ${(data["age"])} `);
};

export const printName = (name: string) => {
    console.log(`Hello, ${name || "World"}!`);
};

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
        case "divide":
            result = num1 / num2;
            break;
        default:
            console.error(("Invalid operation"));
            process.exit(1);
    }
    console.log((result));
};