import React, { useEffect } from 'react';

import Background from '../../components/Background';

import { isAuthenticated } from '../../services/auth/authentication';

function SplashScreen({ navigation }) {
  const verifyIsAutenticated = async () => {
    try {
      const valid = await isAuthenticated();
      return valid !== null
        ? navigation.navigate('Main')
        : navigation.navigate('Register');
    } catch (err) {
      console.tron.log(err);
    }
  };

  useEffect(() => {
    verifyIsAutenticated();
  }, []);

  return <Background />;
}

export default SplashScreen;
