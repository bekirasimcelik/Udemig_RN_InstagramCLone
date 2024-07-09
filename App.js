import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './src/Screen';
import {SafeAreaView} from 'react-native';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </SafeAreaView>
  );
}
