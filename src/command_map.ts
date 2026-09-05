import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  const locations = await state.pokeapi.fetchLocations(state.nextLocationURL);

  if (!locations.results.length) {
    return;
  }

  for (const location of locations.results) {
    console.log(location.name);
  }

  state.prevLocationURL = locations.previous ?? undefined;
  state.nextLocationURL = locations.next ?? undefined;
}
