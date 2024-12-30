import React from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}
//Dans NavBar, ajoute les props nécessaires pour permettre le fonctionnement des boutons. Tu as besoin de recevoir setPokemonIndex et pokemonList.
//Pour te faire gagner un peu beaucoup de temps, voici les types des props à déclarer dans NavBar :
export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
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
    </div>
  );
}
