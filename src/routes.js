import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp/index';
let isAuthenticated = false;

const optionsNavigation = { headerShown: false };

const Register = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      options={optionsNavigation}
      component={SignIn}
    />
    <Stack.Screen
      name="SignUp"
      options={optionsNavigation}
      component={SignUp}
    />
  </Stack.Navigator>
);

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    {isAuthenticated ? <Text>Ola mundo</Text> : <Register />}
  </NavigationContainer>
);

export default Routes;
