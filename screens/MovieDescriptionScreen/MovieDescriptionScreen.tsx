import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import TvShowContext from '../../shared/provider/TvShowProvider';
import {ITvShow, IShow} from '../../types/TvShow';

type RootStackParamList = {
  Home: undefined;
  MovieDescriptionScreen: {userId: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const MovieDescriptionScreen = (params: IShow) => {
  const value = useContext(TvShowContext);
  const navigation = useNavigation();
  const [show, setShow] = useState<IShow>(params);
  console.log('SHOWITEM', show);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <Text>{show.name}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};
