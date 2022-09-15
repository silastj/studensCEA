import { PokemonClient } from "../clients/Pokemon.js";

export const PokemonResolvers = {
  Query: {
    get: () => {
      const pokemonClient = new PokemonClient()
      return pokemonClient.get()
    }
  }
}