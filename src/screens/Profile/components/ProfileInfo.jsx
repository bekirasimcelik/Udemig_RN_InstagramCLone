import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileInfo() {
  return (
    <View style={styles.ProfileInfo}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>0.000</Text>
        <Text style={styles.statLabel}>Post</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>0.000</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statNumber}>0.000</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
});
