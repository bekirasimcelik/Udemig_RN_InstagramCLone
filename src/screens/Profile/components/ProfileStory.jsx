import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcmJzmw7QEOSV7Av6FswOu4PWBj3NufycV3tYzYN-ccndl-J1qOSm3zRKB7ev2MLhWOyFjo-W9F3ZgK7wipcnFADeEsJMrjptAogMft5xMTNZVyowro3vSU2tVCiXIlqkznTnrFTjWCvgN88Fo8mDOp8rR~a3Yzq-o0IwD2zo2tmBOUtrdTgMzuktee~xt0qlw~njIDt6uXL7mxaS07GxPncysa2M1Byv3SKPA~t1299OKKr5aK~GqRVralvlhRtkzDbDShoeao0Rml5AYkAY~iFTP7heSt0LT3~Bf1shqBE14sIXc0HO40BHp8fxaoyO5KqLhrUEXdrgnkuswmshA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcmJzmw7QEOSV7Av6FswOu4PWBj3NufycV3tYzYN-ccndl-J1qOSm3zRKB7ev2MLhWOyFjo-W9F3ZgK7wipcnFADeEsJMrjptAogMft5xMTNZVyowro3vSU2tVCiXIlqkznTnrFTjWCvgN88Fo8mDOp8rR~a3Yzq-o0IwD2zo2tmBOUtrdTgMzuktee~xt0qlw~njIDt6uXL7mxaS07GxPncysa2M1Byv3SKPA~t1299OKKr5aK~GqRVralvlhRtkzDbDShoeao0Rml5AYkAY~iFTP7heSt0LT3~Bf1shqBE14sIXc0HO40BHp8fxaoyO5KqLhrUEXdrgnkuswmshA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcmJzmw7QEOSV7Av6FswOu4PWBj3NufycV3tYzYN-ccndl-J1qOSm3zRKB7ev2MLhWOyFjo-W9F3ZgK7wipcnFADeEsJMrjptAogMft5xMTNZVyowro3vSU2tVCiXIlqkznTnrFTjWCvgN88Fo8mDOp8rR~a3Yzq-o0IwD2zo2tmBOUtrdTgMzuktee~xt0qlw~njIDt6uXL7mxaS07GxPncysa2M1Byv3SKPA~t1299OKKr5aK~GqRVralvlhRtkzDbDShoeao0Rml5AYkAY~iFTP7heSt0LT3~Bf1shqBE14sIXc0HO40BHp8fxaoyO5KqLhrUEXdrgnkuswmshA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>

      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcmJzmw7QEOSV7Av6FswOu4PWBj3NufycV3tYzYN-ccndl-J1qOSm3zRKB7ev2MLhWOyFjo-W9F3ZgK7wipcnFADeEsJMrjptAogMft5xMTNZVyowro3vSU2tVCiXIlqkznTnrFTjWCvgN88Fo8mDOp8rR~a3Yzq-o0IwD2zo2tmBOUtrdTgMzuktee~xt0qlw~njIDt6uXL7mxaS07GxPncysa2M1Byv3SKPA~t1299OKKr5aK~GqRVralvlhRtkzDbDShoeao0Rml5AYkAY~iFTP7heSt0LT3~Bf1shqBE14sIXc0HO40BHp8fxaoyO5KqLhrUEXdrgnkuswmshA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcmJzmw7QEOSV7Av6FswOu4PWBj3NufycV3tYzYN-ccndl-J1qOSm3zRKB7ev2MLhWOyFjo-W9F3ZgK7wipcnFADeEsJMrjptAogMft5xMTNZVyowro3vSU2tVCiXIlqkznTnrFTjWCvgN88Fo8mDOp8rR~a3Yzq-o0IwD2zo2tmBOUtrdTgMzuktee~xt0qlw~njIDt6uXL7mxaS07GxPncysa2M1Byv3SKPA~t1299OKKr5aK~GqRVralvlhRtkzDbDShoeao0Rml5AYkAY~iFTP7heSt0LT3~Bf1shqBE14sIXc0HO40BHp8fxaoyO5KqLhrUEXdrgnkuswmshA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
