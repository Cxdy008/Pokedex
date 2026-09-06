import { createInterface, type Interface } from "readline/promises";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./types.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokedex: Record<string, Pokemon>
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
    pokedex: {},
    pokeapi: new PokeAPI(),
    nextLocationURL: undefined,
    prevLocationURL: undefined,
  }
}
