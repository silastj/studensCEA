import fetch from "node-fetch";

export class PokemonClient {
  async get() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    return await response.json();
  }
}
