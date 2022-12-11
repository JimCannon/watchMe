import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useDebounce from '../hooks/useDebounce';
import TvShowContext from '../shared/provider/TvShowProvider';
import {ITvShow} from '../types/TvShow';

const navigation = useNavigation();

/*function resultTvList({data}: {data: ITvShow[]}) {
  return (
    <View>
      {data &&
        data.map(item => {
          return (
            <View key={item.show.id}>
              <Text
                onPress={() => {
                  navigation.navigate('MovieDescriptionScreen', {TvShow: item});
                }}>
                {item?.show?.name}
              </Text>
            </View>
          );
        })}
    </View>
  );
}*/

export const SearchBox = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const {searchResult, setSearchResult} = useContext(TvShowContext);

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => {
      return fetch(
        `https://api.tvmaze.com/search/shows?q=${debouncedSearch}`,
      ).then<ITvShow[] | []>(res => {
        if (res) {
          return res.json();
        } else {
          return [];
        }
      });
    },
  });

  useEffect(() => {
    isSuccess ? setSearchResult(data) : [];
  }, [data]);

  return (
    <>
      <TextInput
        value={search}
        onChangeText={e => setSearch(e)}
        style={styles.input}
        keyboardType="default"
      />
      {isLoading && <ActivityIndicator />}
      {/* {isSuccess && resultTvList({data})} */}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
