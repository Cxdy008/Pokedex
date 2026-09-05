import { createInterface, type Interface } from "readline/promises";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationURL: string | undefined;
  prevLocationURL: string | undefined;
}

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex> ",
  })

  return {
    readline: rl,
    commands: getCommands(),
    pokeapi: new PokeAPI(),
    nextLocationURL: undefined,
    prevLocationURL: undefined,
  }
}
