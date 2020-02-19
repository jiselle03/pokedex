import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Pokédex</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    backgroundColor: '#ee1515',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  h1: {
    fontSize: 40,
  },
});
