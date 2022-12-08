import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export interface MovieDescriptionScreenProps {}

export const MovieDescriptionScreen: React.FC<
  MovieDescriptionScreenProps
> = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Movie Description</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
