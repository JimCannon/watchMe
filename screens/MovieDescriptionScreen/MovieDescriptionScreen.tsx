import React, {useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import TvShowContext from '../../shared/provider/TvShowProvider';
import {ITvShow, IShow} from '../../types/TvShow';

export const MovieDescriptionScreen = ({route}: any) => {
  const {item} = route.params;

  const navigation = useNavigation();
  const [show, setShow] = useState<IShow>(item);
  var regex = /(<([^>]+)>)/gi;

  console.log('SHOWITEM', show);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView
      style={{
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: show.image.medium}}
      />
      <Text style={styles.details}>{show.name}</Text>

      <Text style={styles.details}>{show.genres}</Text>
      <Text style={styles.details}>{show.summary.replace(regex, '')}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
  },
  details: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
  },
});
