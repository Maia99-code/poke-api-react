import React, { useState } from "react";
import PokemonCount from "./PokemonCount";

const PokemonFetcherApi = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  const fetchPokemon = async () => {
    try {
      let allPokemon = [];
      let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      let response = await fetch(url);
      let data = await response.json();
      allPokemon = data.results;

      setPokemonNames(allPokemon.map((pokemon) => pokemon.name));
      setPokemonCount(allPokemon.length);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
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
