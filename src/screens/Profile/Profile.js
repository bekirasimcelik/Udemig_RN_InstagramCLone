import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
