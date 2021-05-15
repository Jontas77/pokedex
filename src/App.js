import React from "react";

// Import Components
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Jonathan's Pokedex"/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
    </div>
  );
};

export default App;

