import { State } from "./state.js";

export async function commandCatch(state: State, pokemonName: string): Promise<void> {
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

  if (pokemon.base_experience === Math.random()) {
    state.pokedex[pokemonName] = pokemon;
    console.log(`${pokemonName} was caught!`);
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
