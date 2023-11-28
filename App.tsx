/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SamplePage from './src/screens/samples/Samples';
import HomePage from './src/screens/home/Home';
import PaintingPage from './src/screens/painting/Painting';
import GroupPage from './src/screens/group/Group';
import {Confetti} from './src/screens/sample/Sample2';
import Sample1 from './src/screens/sample/Sample1';
import {LineChart} from './src/screens/line-chart/LineChart';
import {ChasingBubbles} from './src/screens/chasing-bubble/ChasingBubbles';
import {WaveMeter} from './src/screens/wave-meter/WaveMeter';
import {BendingCircle} from './src/screens/bending-circle/BendingCircle';

const Stack = createStackNavigator();
// https://github.com/friyiajr/SkiaAnimationShowcase
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Samples">
        <Stack.Screen name="Samples" component={SamplePage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Painting" component={PaintingPage} />
        <Stack.Screen name="Group" component={GroupPage} />
        <Stack.Screen name="Sample0" component={Confetti} />
        <Stack.Screen name="Sample1" component={Sample1} />
        <Stack.Screen name="LineChart" component={LineChart} />
        <Stack.Screen name="ChasingBubbles" component={ChasingBubbles} />
        <Stack.Screen name="WaveMeter" component={WaveMeter} />
        <Stack.Screen name="BendingCircle" component={BendingCircle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
