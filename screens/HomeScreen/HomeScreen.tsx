import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {UserContext} from '../../shared/provider/UserProvider';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppRootNavigationParams} from '../../navigation/AppRootNavigationParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './StackParamList';

export interface HomeScreenProps {}

export const HomeScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'MovieDescription'>) => {
  const navigation = useNavigation();
  const data = useContext(UserContext);
  // return <div>HomeScreen</div>;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      {data}
      <Button
        title="Go to MovieDescription"
        onPress={() => navigation.navigate('MovieDescription')}
      />
    </View>
  );
};
