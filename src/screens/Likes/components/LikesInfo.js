import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function LikesIngo() {
  const user = {
    profileImage: require('./../../../../assets/image9.png'),
    username: ['Caroline', 'Ian', 'Brian'],
    likedPosts: [3, 1, 6],
    lastActivity: ['3h', '2h', '1h'],
  };
  return (
    <View>
      <View style={styles.container1}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.activityText}>
          {user.username[0]} liked {user.likedPosts[0]} Posts.{' '}
          {user.lastActivity[0]}
        </Text>
      </View>
      <View style={styles.imagesColumn}>
        <Image
          source={require('./../../../../assets/image6.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image4.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image5.png')}
          style={styles.postImage}
        />
      </View>
      <View style={styles.container1}>
        <View style={styles.c2Profile}>
          <Image
            source={require('./../../../../assets/image3.png')}
            style={styles.c2Img1}
          />
          <Image
            source={require('./../../../../assets/image2.png')}
            style={styles.c2Img2}
          />
        </View>
        <Text style={styles.activityText}>
          {user.username[1]} liked {user.username[2]} photo.{' '}
          {user.lastActivity[1]}
        </Text>
        <Image
          source={require('./../../../../assets/image7.png')}
          style={styles.postImage}
        />
      </View>
      <View style={styles.container1}>
        <Image
          source={require('./../../../../assets/image8.png')}
          style={styles.profileImage}
        />
        <Text style={styles.activityText}>
          {user.username[2]} started following {user.username[1]}.{' '}
          {user.lastActivity[2]}
        </Text>
      </View>
      <View style={styles.container1}>
        <Image
          source={require('./../../../../assets/image3.png')}
          style={styles.profileImage}
        />
        <Text style={styles.activityText}>
          {user.username[2]} liked {user.likedPosts[2]} Posts.{' '}
          {user.lastActivity[2]}
        </Text>
      </View>
      <View style={styles.imagesColumn}>
        <Image
          source={require('./../../../../assets/image1.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image2.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image5.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image6.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image7.png')}
          style={styles.postImage}
        />
        <Image
          source={require('./../../../../assets/image8.png')}
          style={styles.postImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  activityText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 34,
  },
  imagesColumn: {
    flexDirection: 'row',
    marginLeft: 90,
    gap: 10,
    flexWrap: 'wrap',
  },
  postImage: {
    height: 45,
    width: 45,
  },
  c2Img1: {
    height: 40,
    width: 40,
    borderRadius: 30,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  c2Img2: {
    height: 40,
    width: 40,
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  c2Profile: {
    width: 60,
    height: 60,
    position: 'relative',
  },
});
