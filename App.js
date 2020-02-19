import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, ScrollableList } from './components';

const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2';
const GET_150_POKEMON_PATH = 'pokemon/?limit=150';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`${POKEMON_API_ENDPOINT}/${GET_150_POKEMON_PATH}`)
      .then(res => res.json())
      .then(payload => {
        setPokemonList(payload.results);
      });
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <ScrollableList items={pokemonList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
});
