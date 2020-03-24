import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../../pages/Main/Home';
import Profile from '../../pages/Main/Profile';

const Tab = createMaterialBottomTabNavigator();

const Main = () => (
  <Tab.Navigator initialRouteName="Home" shifting={true}>
    <Tab.Screen
      name="Home"
      options={{
        tabBarColor: '#570388',
        tabBarIcon: () => <Icon name="home" size={27} />,
      }}
      component={Home}
    />
    <Tab.Screen
      name="Profile"
      options={{
        tabBarColor: '#f90190',
        tabBarIcon: () => <Icon name="person" size={27} />,
      }}
      component={Profile}
    />
  </Tab.Navigator>
);

export default Main;
