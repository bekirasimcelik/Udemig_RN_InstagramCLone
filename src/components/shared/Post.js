import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Dots} from '../../Icons';
import FitImage from './FitImage';

export default function Post({post}) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post?.user?.avatar}} style={styles.avatar} />
          <Text style={styles.title}>{post?.user?.name}</Text>
        </View>
        <Dots />
      </View>
      <FitImage src={post?.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
});
