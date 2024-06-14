import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BurgerMenu, DropDown, Plus} from '../../../Icons';

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.users}>
        <Text style={styles.username}>Username</Text>
        <DropDown />
      </View>
      <View style={styles.burger}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  users: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    gap: 5,
  },
  burger: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
