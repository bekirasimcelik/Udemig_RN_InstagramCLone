import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function SearchBody() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6}>
        <View style={[styles.photo, styles.absoluteTopLeft]}>
          <Image
            source={require('./../../../../assets/image1.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.photo, styles.largePhoto]}
        activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image2.png')}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6}>
        <View style={[styles.photo, styles.absoluteTopRight]}>
          <Image
            source={require('./../../../../assets/image3.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image4.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image5.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image6.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image7.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image8.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image9.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image10.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image11.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image4.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photo} activeOpacity={0.6}>
        <Image
          source={require('./../../../../assets/image1.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photo: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  largePhoto: {
    width: '66.66%',
    height: '200%',
  },
  absoluteTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  absoluteTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
