import { View, Text, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
  const { pokemons, loadPokemons, nextUrl } = props;

  const loadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => (
        <PokemonCard pokemon={item} />
      )}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={nextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        nextUrl && (
          <ActivityIndicator
            size='large'
            style={styles.spinner}
            color='#aeaeae'
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 40 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60
  }
});

export default PokemonList