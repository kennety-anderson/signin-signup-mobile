import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../pages/Register/SignIn';
import SignUp from '../../pages/Register/SignUp/index';

const optionsNavigation = { headerShown: false };

const Stack = createStackNavigator();

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

export default Register;
