import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/home';
import Profile from '../screens/profile';
import {Login, SignUp} from '../screens/auth';
import Setting from '../screens/setting/Setting';

const Stack = createNativeStackNavigator();

export default function Rootnavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
