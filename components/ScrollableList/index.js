import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableHighlight } from 'react-native';

export default function ScrollableList({items}) {
    return(
        <ScrollView style={styles.pokemonList}>
        {items.map(pokemon => {
          return (
            <TouchableHighlight onPress={() => console.log('tapped')}>
                <View key={pokemon.name} style={styles.item}>
                    <Text style={styles.h2}>{pokemon.name}</Text>
                </View>
            </TouchableHighlight>
          )
        })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pokemonList: {
        flex: 1,
        flexDirection: 'column',
      },
      item: {
        backgroundColor: 'white',
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
