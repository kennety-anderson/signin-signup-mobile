import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.2.2' })
    .useReactNative()
    // .setAsyncStorageHandler()
    .connect();

  console.tron = tron;
}
