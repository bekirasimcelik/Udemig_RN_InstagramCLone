import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search/SearchScreen';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile/Profile';
import {
  Home,
  HomeField,
  Reel,
  ReelField,
  Search,
  SearchField,
  Shop,
  ShopField,
} from './Icons';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Screen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="search"
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={30} /> : <Reel size={30} />,
        }}
        name="reel"
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        name="shop"
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.avatar,
                {borderColor: focused ? '#000' : 'transparent'},
              ]}
              source={require('./../assets/profile.png')}
            />
          ),
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  },
});
