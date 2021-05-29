import React, { useState } from "react";

const CaughtPokemon = ({ date }) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    // const pokemonList = [
    //   "Spearow",
    //   "VictoryBell",
    //   "Charmander",
    //   "Blastoise",
    //   "Squirtle",
    //   "Bulbasaur",
    // ];
    // const random = Math.floor(Math.random() * pokemonList.length);
    return pokemonNameInput === "" ? "" : setCaught(caught.concat(pokemonNameInput));
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setPokemonNameInput(value);
  };

  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange} />
      <button onClick={() => {
        catchPokemon();
        setPokemonNameInput("");
      }
        }>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
