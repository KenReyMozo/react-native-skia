/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SamplePage from './src/screens/samples/Samples';
import HomePage from './src/screens/home/Home';
import PaintingPage from './src/screens/painting/Painting';
import GroupPage from './src/screens/group/Group';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Samples">
        <Stack.Screen name="Samples" component={SamplePage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Painting" component={PaintingPage} />
        <Stack.Screen name="Group" component={GroupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
