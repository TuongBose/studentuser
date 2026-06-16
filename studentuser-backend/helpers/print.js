import chalk from "chalk";

class OutputType {
    static SUCCESS = "SUCCESS";
    static ERROR = "ERROR";
    static WARNING = "WARNING";
    static INFORMATION = "INFORMATION";
}

function print(message, outputType) {
    switch (outputType) {
        case OutputType.SUCCESS:
            console.log(chalk.green(message));
            break;
        case OutputType.ERROR:
            console.log(chalk.red(message));
            break;
        case OutputType.WARNING:
            console.log(chalk.yellow(message));
            break;
        case OutputType.INFORMATION:
            console.log(chalk.blue(message));
            break;
        default:
            console.log(chalk.white(message));
    }
}

export { print, OutputType };