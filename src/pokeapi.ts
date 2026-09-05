export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url);
    const data = await response.json();
    return data as ShallowLocations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data as Location;
  }
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: { name: string; url: string }[],
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string
      url: string
    }
    version_details: {
      rate: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]

  game_index: number

  id: number

  location: {
    name: string
    url: string
  }

  name: string

  names: {
    language: {
      name: string
      url: string
    }
    name: string
  }[]

  pokemon_encounters: {
    pokemon: {
      name: string
      url: string
    }
    version_details: {
      encounter_details: {
        chance: number
        condition_values: unknown[]
        max_level: number
        method: {
          name: string
          url: string
        }
        min_level: number
        pokemon_details: null
      }[]
      max_chance: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]
}
