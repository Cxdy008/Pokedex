import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands.js";

const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "> ",
});

export function cleanInput(input: string): string[] {
    const cleanedInput = input.trim().split(" ").map((line) => line.toLocaleLowerCase());
    const filteredInput = cleanedInput.filter((line) => line !== "");
    return filteredInput;
}

export function startREPL() {
    rl.prompt();

    rl.on("line", (input: string) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) rl.prompt();

        const commands = getCommands();
        const command = commands[cleanedInput[0]];
        if (command) {
          command.callback(commands)
        } else {
          console.log("Unknown command")
        }

        rl.prompt();
    });
}
