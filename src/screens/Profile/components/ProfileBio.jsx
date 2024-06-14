import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Username</Text>
      <Text style={styles.desription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, delectus
        exercitationem nihil ratione quod voluptatibus.
      </Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 13,
    color: '#000000',
  },
  desription: {
    marginVertical: 5,
    color: '#000000',
  },
  link: {
    color: '#004C8B',
    fontWeight: '400',
  },
  editProfileButton: {
    borderColor: '#CBCBCB',
    backgroundColor: '#FFFF',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  editProfileText: {
    fontWeight: '700',
    color: '#000000',
  },
});
