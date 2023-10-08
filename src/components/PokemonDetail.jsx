// eslint-disable-next-line no-unused-vars
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { PokemonContext } from '../context/PokemonContext';

export default function PokemonDetail() {
  const { pokemonId } = useParams();
  const { pokemons } = useContext(PokemonContext);

  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(pokemonId));

  const imgUrl = pokemon.sprites.other["official-artwork"].front_default;
  return (
    <div>
      <Link to="..">Back</Link>
      <img src={imgUrl} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <p>{pokemon.types.map(({ type }) => type.name).join(", ")}</p>
      <p>
        <span className="pokemonId">#{pokemon.id}</span>
      </p>
    </div>
  )
}




