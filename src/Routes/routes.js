import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import Register from './Register';
import Main from './Main';

const optionsNavigation = { headerShown: false };

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
      name="SplashScreen"
      options={optionsNavigation}
      component={SplashScreen}
    />
    <Stack.Screen
      name="Register"
      options={optionsNavigation}
      component={Register}
    />
    <Stack.Screen name="Main" options={optionsNavigation} component={Main} />
  </Stack.Navigator>
);

export default Routes;
