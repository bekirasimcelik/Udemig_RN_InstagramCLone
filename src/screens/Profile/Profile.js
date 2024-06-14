import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileInfo from './components/ProfileInfo';
import ProfileBio from './components/ProfileBio';
import ProfileStory from './components/ProfileStory';
import posts from '../../data/posts';

export default function Profile() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.7}>
      <Image
        style={{width: imageSize, height: imageSize, margin: 1}}
        source={{uri: item.image}}
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileBio />
      <ProfileStory />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        data={posts}
        renderItem={renderProps}
        contentContainerStyle={styles.photoGrid}
        style={{margin: 5}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  photoGrid: {
    paddingVertical: 20,
  },
});
