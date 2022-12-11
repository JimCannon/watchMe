/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Button,
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SearchBox} from '../../components/SearchBox';
import TvShowContext from '../../shared/provider/TvShowProvider';
import {ITvShow, IShow} from '../../types/TvShow';

export const HomeScreen = () => {
  // const value = useContext<ITvShow[]>(TvShowContext);
  const value = useContext(TvShowContext);

  const navigation = useNavigation();

  const renderItem = ({item}: {item: IShow}) => {
    console.log('ITEM', item);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('MovieDescriptionScreen', item);
        }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  console.log('VALUES', Object.values(value));
  let test = value.searchResult?.map(item => item.show);

  return (
    <View>
      <View>
        <SearchBox />
      </View>
      <View>
        {/* <Text>{JSON.stringify(value, null, 2)}</Text> */}
        <View style={styles.container}>
          <FlatList
            // data={value.map((item: ITvShow) => item.show)}
            data={test}
            renderItem={renderItem}
            keyExtractor={item => String(item?.id)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
