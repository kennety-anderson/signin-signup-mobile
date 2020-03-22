import React from 'react';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';
import Background from './components/Background';

import Routes from './routes';

const App = () => (
  <Background>
    <StatusBar
      barStyle="ligth-content"
      translucent={true}
      backgroundColor="transparent"
    />
    <Routes />
  </Background>
);

export default App;
