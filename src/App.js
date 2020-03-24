import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/reactotronConfig';

import Routes from './Routes/routes';

// const Loading = () => <Text>Loading porra</Text>;

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="ligth-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
