import React, { useState, useCallback } from 'react'
import { Text } from 'react-native'
import useAuth from './../hooks/useAuth';
import { getPokemonFavoriteApi } from '../api/favorite';
import { getPokemonDetailsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { useFocusEffect } from '@react-navigation/native';
import NoLogged from '../components/NoLogged';

const FavoriteScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              imagen: pokemonDetail.sprites.other['official-artwork'].front_default
            });
          }

          setPokemons(pokemonsArray);

        })()
      }
    }, [auth])
  )

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}

export default FavoriteScreen