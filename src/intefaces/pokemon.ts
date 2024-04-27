export interface Pokemon {
  id?: number,
  abilities?: Ability[],
  name?: string,
  sprites?: {
    other: {
      home: {
        front_default: string
      }
    }
  }
}

export interface Ability {
  is_hidden: boolean,
  slot: number,
  ability: {
    name: string,
    url: string
  }
}