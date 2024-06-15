import { useState } from "react";
import PokemonCount from "./PokemonCount";

const PokemonFetcherApi = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  const fetchPokemon = async (limit) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      let response = await fetch(url);
      let data = await response.json();
      let allPokemon = data.results;

      setPokemonNames(allPokemon.map((pokemon) => pokemon.name));
      setPokemonCount(allPokemon.length);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchPokemon(807)}>Fetch First 807 Pokemon</button>
      <button onClick={() => fetchPokemon(100000)}>Fetch All Pokemon</button>
      <PokemonCount pokemonCount={pokemonCount} />
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonFetcherApi;
