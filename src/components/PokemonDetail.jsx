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

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#F0F0F0',
  };

  const backLinkStyles = {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    marginBottom: '20px',
    display: 'block',
  };

  const imageStyles = {
    width: '200px',
    height: 'auto',
    marginTop: '20px',
    border: '2px solid #007bff',
  };

  const nameStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const typesStyles = {
    fontSize: '18px',
    marginTop: '10px',
  };

  const idStyles = {
    fontSize: '16px',
    color: '#777',
    marginTop: '10px',
  };

  return (
    <div style={containerStyles}>
    <img src={imgUrl} alt={pokemon.name} style={imageStyles} />
    <p style={nameStyles}>{pokemon.name}</p>
    <p style={typesStyles}>
      {pokemon.types.map(({ type }) => type.name).join(", ")}
    </p>
    <p>
      <span className="pokemonId" style={idStyles}>#{pokemon.id}</span>
    </p>
    <Link to=".." style={backLinkStyles}>Back</Link>
    </div>
  )
}




