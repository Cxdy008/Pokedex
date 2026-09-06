import { State } from "./state.js";

export async function commandExplore(state: State, locationName: string): Promise<void> {
  if (!locationName) {
    console.log("Usage: explore <location-area>");
    return;
  }

  const pokemons = await state.pokeapi.fetchLocation(locationName);

  if (!pokemons) return;

  for (const pokemon of pokemons.pokemon_encounters) {
    console.log(pokemon.pokemon.name);
  }
}
