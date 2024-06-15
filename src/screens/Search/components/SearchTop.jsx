import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import React from 'react';
import {QrCamera, Search} from '../../../Icons';

export default function SearchTop() {
  return (
    <View style={styles.searchLine}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Search size={20} />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
        <QrCamera />
      </View>
      <FlatList
        data={[]}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchLine: {},
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 30,
    borderRadius: 10,
  },
  iconWrapper: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
