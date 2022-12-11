/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SearchBox} from '../../components/SearchBox';
import TvShowContext from '../../shared/provider/TvShowProvider';
import {IShow} from '../../types/TvShow';

export const HomeScreen = () => {
  const value = useContext(TvShowContext);

  const navigation = useNavigation();

  const renderItem = ({item}: {item: IShow}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('MovieDescriptionScreen', {item});
      }}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  let data = value.searchResult?.map(item => item.show);

  return (
    <View>
      <View>
        <SearchBox />
      </View>
      <View>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item?.id.toString()}
            ItemSeparatorComponent={ItemDivider}
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
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },
  itemText: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 32,
  },
});
