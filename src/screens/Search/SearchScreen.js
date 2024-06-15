import React from 'react';
import SearchTop from './components/SearchTop';
import SearchBody from './components/SearchBody';
import {View} from 'react-native';

const SearchScreen = () => {
  return (
    <View>
      <SearchTop />
      <SearchBody />
    </View>
  );
};

export default SearchScreen;
