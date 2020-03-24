import React from 'react';
import { Alert } from 'react-native';

import Background from '../../../components/Background';
import { Container, Button, TextButton } from './styles';

import { logout } from '../../../services/auth/authentication';

function Profile({ navigation }) {
  const handlerLogout = async () => {
    try {
      Alert.alert('Aviso!', 'Deseja realmente sair desta conta?', [
        {
          text: 'Cancelar',
        },
        {
          text: 'Sim',
          onPress: async () => {
            await logout();
            return navigation.navigate('Register');
          },
        },
      ]);
    } catch (err) {
      console.tron.log(err);
    }
  };

  return (
    <Background>
      <Container>
        <Button onPress={handlerLogout}>
          <TextButton>Sair desta conta!</TextButton>
        </Button>
      </Container>
    </Background>
  );
}

export default Profile;
