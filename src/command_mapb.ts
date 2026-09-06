import { State } from "./state.js";

export async function commandMapB(state: State) {
  if (state.prevLocationURL === undefined) {
    console.log("you're on the first page");
    return;
  };

  const prevLoc = await state.pokeapi.fetchLocations(state.prevLocationURL);

  for (const location of prevLoc.results) {
    console.log(location.name);
  }

  state.nextLocationURL = prevLoc.next ?? undefined;
  state.prevLocationURL = prevLoc.previous ?? undefined;
}
