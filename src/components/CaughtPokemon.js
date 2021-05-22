import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    const pokemonList = ["Spearow", "VictoryBell", "Charmander", "Blastoise", "Squirtle"];
    const random = Math.floor(Math.random() * pokemonList.length);
    return setCaught(caught.concat(pokemonList[random]));
  };

  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
