import { State } from "./state.js";

export async function commandMapB(state: State) {
  const prevLoc = await state.pokeapi.fetchLocations(state.prevLocationURL);
  if (prevLoc.previous === null) {
    console.log("you're on the first page");
    return;
  };

  for (const location of prevLoc.results) {
    console.log(location.name);
  }

  state.nextLocationURL = prevLoc.next ?? undefined;
  state.prevLocationURL = prevLoc.previous ?? undefined;
}
