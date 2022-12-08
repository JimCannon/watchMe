import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type HomeNavigatorParams = {
  Home: undefined;
  MovieDescription: {id: number};
};
const HomeNav = createNativeStackNavigator<HomeNavigatorParams>();

const HomeNavigator: React.FC = () => {
  return (
    <View>
      <Text>HomeNavigator</Text>
    </View>
  );
};

export default HomeNavigator;
