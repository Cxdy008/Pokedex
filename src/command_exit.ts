import type { CLICommand } from "./command.js";

export function commandExit(_commands: Record<string, CLICommand>): void {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}