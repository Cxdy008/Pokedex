import { Cache } from "./pokecache.js";
import { LocationArea, Pokemon, ShallowLocations } from "./types.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private static readonly cache = new Cache(1000 * 60 * 5);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const cached = PokeAPI.cache.get<ShallowLocations>(pageURL ?? `${PokeAPI.baseURL}/location-area`);
    if (cached) return cached;

    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    PokeAPI.cache.add(url, data as ShallowLocations);

    return data as ShallowLocations;
  }

  async fetchLocation(locationName: string): Promise<LocationArea> {
    const cached = PokeAPI.cache.get<LocationArea>(`${PokeAPI.baseURL}/location-area/${locationName}`);
    if (cached) return cached;

    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch location "${locationName}": ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    PokeAPI.cache.add(url, data as LocationArea);

    return data as LocationArea;
  }

  async fetchPokemon(name: string): Promise<Pokemon> {
    const cached = PokeAPI.cache.get<Pokemon>(`${PokeAPI.baseURL}/pokemon/${name}`);
    if (cached) return cached;

    const url = `${PokeAPI.baseURL}/pokemon/${name}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon "${name}": ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    PokeAPI.cache.add(url, data as Pokemon);

    return data as Pokemon;
  }
}
