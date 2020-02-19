import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function ScrollableList({items}) {
    return(
        <ScrollView style={styles.pokemonList}>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.name} style={styles.item}>
              <Text style={styles.h2}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
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
