import {View} from 'react-native';
import React from 'react';
import LikesTabs from './components/LikesTabs';
import LikesInfo from './components/LikesInfo';

export default function Likes() {
  return (
    <View>
      <LikesTabs />
      <LikesInfo />
    </View>
  );
}
