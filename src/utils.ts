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