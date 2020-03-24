import Reactotron from 'reactotron-react-native';

import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '10.0.2.2' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
