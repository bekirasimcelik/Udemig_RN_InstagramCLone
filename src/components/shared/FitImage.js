import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';

export default function FitImage({src}) {
  const width = Dimensions.get('window').width;
  const ratio = 1080 / width;
  const height = 607 / ratio;
  return <Image style={{width, height}} source={{uri: src}} />;
}
