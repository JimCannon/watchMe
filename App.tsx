/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {MovieDescriptionScreen} from './screens/MovieDescriptionScreen/MovieDescriptionScreen';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TvShowContextProvider} from './shared/provider/TvShowProvider';

type RootStackParamList = {
  Home: undefined;
  MovieDescriptionScreen: {userId: string};
};

// type Props = NativeStackScreenProps<
//   RootStackParamList,
//   'MovieDescriptionScreen',
//   'MyStack'
// >;

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TvShowContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="MovieDescriptionScreen"
              component={MovieDescriptionScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TvShowContextProvider>
    </QueryClientProvider>
  );
};

export default App;
