import { createContext } from 'react'
import { useGetPokemons } from './hooks/useGetPokemons'

export const PokemonContext = createContext();

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({ children }) => {
  const pokemons = useGetPokemons();

  return (
    <>
    <header style={{textAlign: 'center'}}>
      <h1>BIENVENIDO AL POKEDEX</h1>
    </header>
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
    </>
  )
}