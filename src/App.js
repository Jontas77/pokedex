import React from "react";

// Import Components
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import PokemonMovesSelector from "./components/PokemonMovesSelector";
import PokemonCity from "./components/PokemonCity";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => console.log("I was Clicked!");

  return (
    <div>
      <Logo appName="Jonathan's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;

