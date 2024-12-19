import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const pokemonPrecedent = () => {
    pokemonIndex === 0 ? setPokemonIndex(0) : setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        <button onClick={pokemonPrecedent} type="button">
          Précédent
        </button>
        <button onClick={pokemonSuivant} type="button">
          Suivant
        </button>
      </div>
    </div>
  );
}

export default App;
