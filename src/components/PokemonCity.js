import React, { useState } from "react";

const PokemonCity = () => {
   const [city, setCity] = useState("");

   const updateCity = (e) => {
    return setCity(e.target.value);
   };

  return (
    <div>
        <input type="text" value={city} onChange={updateCity} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
};


export default PokemonCity;
