import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from './components';

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
      <View style={styles.pokemonList}>
        {pokemonList.map(pokemon => {
          return (
            <View style={styles.item}>
              <Text style={styles.h2}>{pokemon.name}</Text>
            </View>
          )
        })}
      </View>
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
  pokemonList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  item: {
    backgroundColor: 'pink',
    alignItems: 'center',
    borderBottomWidth: 2,
    height: 40,
    borderBottomColor: 'black',
    justifyContent: 'center',
  },
  h2: {
    fontSize: 20,
  },
});
