import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import posts from '../../../data/posts';

const ProfilePictures = () => {
  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image style={{width: 50, height: 50}} source={{uri: item.image}} />
    </TouchableOpacity>
  );
  return <FlatList data={posts} renderItem={renderProps} />;
};

export default ProfilePictures;
