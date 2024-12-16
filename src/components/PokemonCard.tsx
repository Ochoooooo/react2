interface pokemonTypes {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}
export default function PokemonCard({ pokemon }: pokemonTypes) {
  return (
    <figure>
      {pokemon.imgSrc && pokemon.name ? (
        <div>
          <img src={pokemon.imgSrc} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}
