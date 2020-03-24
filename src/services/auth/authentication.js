import { AsyncStorage } from 'react-native';

const TOKEN_KEY = 'accessToken';

export const isAuthenticated = () => async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token !== null;
};
export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);
export const login = token => AsyncStorage.setItem(TOKEN_KEY, token);
export const logout = () => AsyncStorage.removeItem(TOKEN_KEY);
