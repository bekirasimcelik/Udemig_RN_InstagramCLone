import {View, StyleSheet} from 'react-native';
import React from 'react';
import Header from './components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
