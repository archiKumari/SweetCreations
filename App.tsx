import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import { Colors } from './src/Constants';
import BakingNavigator from './src/Navigators/BakingNavigator';
import DecorationNavigator from './src/Navigators/DecorationNavigator';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar backgroundColor={Colors.primaryLight2}/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Baking" component={BakingNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="Decoration" component={DecorationNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
