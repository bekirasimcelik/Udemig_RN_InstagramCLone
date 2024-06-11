import React from 'react';
import {Image} from 'react-native';

function Logo() {
  return <Image source={require('./../assets/logo.png')} />;
}

function Home({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/home.png')}
    />
  );
}

function HomeField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/home-field.png')}
    />
  );
}

function Search({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/search.png')}
    />
  );
}

function SearchField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/search-field.png')}
    />
  );
}

function Reel({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/reel.png')}
    />
  );
}

function ReelField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/reel-field.png')}
    />
  );
}

function Shop({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/shop.png')}
    />
  );
}

function ShopField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/shop-field.png')}
    />
  );
}

function Profile({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/profile.png')}
    />
  );
}

export {
  Logo,
  Home,
  HomeField,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
  Profile,
};
