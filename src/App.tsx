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
  //Utilise la méthode map pour parcourir pokemonList directement dans la partie <nav> du composant App.
  //Pour chaque Pokémon, génère un bouton avec son nom. Assure-toi d'ajouter une key unique à chaque bouton pour aider React à identifier les éléments de manière efficace : les pokémons n'ont pas d'id, mais leur name est unique 😉
  //Vérifie que les boutons pour chaque Pokémon sont générés dynamiquement dans App et que le clic sur un bouton met à jour correctement le Pokémon affiché dans App.
  //Fournis le lien vers la branche rendering-list.1 de ton dépôt GitHub pour valider cette étape.

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button
            type="button"
            key={pokemon.name}
            onClick={() => setPokemonIndex(index)}
          >
            {pokemon.name}
          </button>
        ))}
      </nav>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </div>
  );
}

export default App;
