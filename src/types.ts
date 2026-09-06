// PokeAPI reusable TypeScript types

export type NamedAPIResource = {
  name: string
  url: string
}

/* -------------------------------------------------------------------------- */
/* Shared types                                                               */
/* -------------------------------------------------------------------------- */

export type Name = {
  name: string
  language: NamedAPIResource
}

export type GameIndex = {
  game_index: number
  version: NamedAPIResource
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: NamedAPIResource[],
};

/* -------------------------------------------------------------------------- */
/* Location                                                                   */
/* -------------------------------------------------------------------------- */

export type Location = {
  id: number
  name: string
  region: NamedAPIResource | null
  generation: NamedAPIResource
  names: Name[]
  game_indices: GameIndex[]
  areas: NamedAPIResource[]
}

export type LocationArea = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRate[]
  location: NamedAPIResource
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export type EncounterMethodRate = {
  encounter_method: NamedAPIResource
  version_details: {
    rate: number
    version: NamedAPIResource
  }[]
}

export type PokemonEncounter = {
  pokemon: NamedAPIResource
  version_details: {
    encounter_details: {
      chance: number
      condition_values: NamedAPIResource[]
      max_level: number
      method: NamedAPIResource
      min_level: number
    }[]
    max_chance: number
    version: NamedAPIResource
  }[]
}

/* -------------------------------------------------------------------------- */
/* Pokemon                                                                    */
/* -------------------------------------------------------------------------- */

export type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  past_abilities: PokemonPastAbility[]
  forms: NamedAPIResource[]
  game_indices: GameIndex[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  species: NamedAPIResource
  sprites: PokemonSprites
  cries: PokemonCries
  stats: PokemonStat[]
  past_stats: PokemonPastStats[]
  types: PokemonType[]
  past_types: PokemonPastType[]
}

export type PokemonAbility = {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource
}

export type PokemonPastAbility = {
  generation: NamedAPIResource
  abilities: PokemonAbility[]
}

export type HeldItem = {
  item: NamedAPIResource
  version_details: HeldItemVersionDetail[]
}

export type HeldItemVersionDetail = {
  rarity: number
  version: NamedAPIResource
}

export type PokemonMove = {
  move: NamedAPIResource
  version_group_details: PokemonMoveVersionGroupDetail[]
}

export type PokemonMoveVersionGroupDetail = {
  level_learned_at: number
  version_group: NamedAPIResource
  move_learn_method: NamedAPIResource
  order: number | null
}

export type PokemonStat = {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

export type PokemonPastStats = {
  generation: NamedAPIResource
  stats: PokemonStat[]
}

export type PokemonType = {
  slot: number
  type: NamedAPIResource
}

export type PokemonPastType = {
  generation: NamedAPIResource
  types: PokemonType[]
}

/* -------------------------------------------------------------------------- */
/* Pokemon sprites                                                            */
/* -------------------------------------------------------------------------- */

export type PokemonSprites = {
  front_default: string | null
  front_shiny: string | null
  front_female: string | null
  front_shiny_female: string | null
  back_default: string | null
  back_shiny: string | null
  back_female: string | null
  back_shiny_female: string | null
  other: {
    dream_world: DreamWorldSprites
    home: HomeSprites
    showdown: ShowdownSprites
    "official-artwork": OfficialArtworkSprites
  }
  versions: PokemonSpriteVersions
}

export type DreamWorldSprites = {
  front_default: string | null
  front_female: string | null
}

export type HomeSprites = {
  front_default: string | null
  front_shiny: string | null
  front_female: string | null
  front_shiny_female: string | null
}

export type ShowdownSprites = {
  front_default: string | null
  front_shiny: string | null
  front_female: string | null
  front_shiny_female: string | null
  back_default: string | null
  back_shiny: string | null
  back_female: string | null
  back_shiny_female: string | null
}

export type OfficialArtworkSprites = {
  front_default: string | null
  front_shiny: string | null
}

export type PokemonSpriteVersions = {
  "generation-i": GenerationISprites
  "generation-ii": GenerationIISprites
  "generation-iii": GenerationIIISprites
  "generation-iv": GenerationIVSprites
  "generation-v": GenerationVSprites
  "generation-vi": GenerationVISprites
  "generation-vii": GenerationVIISprites
  "generation-viii": GenerationVIIISprites
}

export type GenerationISprites = {
  "red-blue": SpriteSet
  yellow: SpriteSet
}

export type GenerationIISprites = {
  crystal: SpriteSet
  gold: SpriteSet
  silver: SpriteSet
}

export type GenerationIIISprites = {
  emerald: SpriteSet
  "firered-leafgreen": SpriteSet
  "ruby-sapphire": SpriteSet
}

export type GenerationIVSprites = {
  "diamond-pearl": SpriteSet
  "heartgold-soulsilver": SpriteSet
  platinum: SpriteSet
}

export type GenerationVSprites = {
  "black-white": BlackWhiteSprites
}

export type GenerationVISprites = {
  "omegaruby-alphasapphire": SpriteSet
  "x-y": SpriteSet
}

export type GenerationVIISprites = {
  icons: SpriteSet
  "ultra-sun-ultra-moon": SpriteSet
}

export type GenerationVIIISprites = {
  icons: SpriteSet
  "brilliant-diamond-shining-pearl": SpriteSet
}

export type SpriteSet = {
  front_default: string | null
  front_shiny: string | null
  front_female?: string | null
  front_shiny_female?: string | null
  back_default?: string | null
  back_shiny?: string | null
  back_female?: string | null
  back_shiny_female?: string | null
}

export type BlackWhiteSprites = SpriteSet & {
  animated?: SpriteSet
}

/* -------------------------------------------------------------------------- */
/* Pokemon cries                                                              */
/* -------------------------------------------------------------------------- */

export type PokemonCries = {
  latest: string
  legacy: string
}
