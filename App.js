import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import Home from './src/Home';
import DashBoard from './src/DashBoard';

const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

function StackScreens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={BottomScreens} />
    </Stack.Navigator>
  );
}

function BottomScreens() {
  return (
    <BottomStack.Navigator tabBarOptions={{activeTintColor: '#e91e63'}}>
      <BottomStack.Screen name="Home" component={Home} />
      <BottomStack.Screen name="DashBoard" component={DashBoard} />
    </BottomStack.Navigator>
  );
}

function App() {
  return (
    <>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </>
  );
}

export default App;
