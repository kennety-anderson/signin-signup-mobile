import React, { useState, useRef } from 'react';
import { Keyboard } from 'react-native';

import Background from '../../../components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
  Error,
} from './styles';

import apiAuthentication from '../../../services/auth/api';
import { login } from '../../../services/auth/authentication';

function SignIn({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handlerSubmit = async () => {
    try {
      const { data } = await apiAuthentication.post('auth', {
        email,
        password,
      });
      await login(data.accessToken);
      Keyboard.dismiss();
      navigation.navigate('Main', { screen: 'Home' });
    } catch (err) {
      setError('Erro, usuario ou senha invalidos!');
    }
  };

  return (
    <Background>
      <Container>
        <Form>
          {error && <Error>{error}</Error>}
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            placeholder="Digite seu email"
            value={email}
            onChangeText={text => setEmail(text)}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            returnKeyType="send"
            placeholder="Digite sua senha"
            ref={passwordRef}
            value={password}
            onChangeText={text => setPassword(text)}
            onSubmitEditing={handlerSubmit}
          />
          <SubmitButton onPress={handlerSubmit}>Entrar</SubmitButton>
        </Form>
        <SignUpLink
          onPress={() => {
            Keyboard.dismiss();
            navigation.navigate('SignUp');
          }}>
          <SignUpLinkText>Criar conta gratuita!</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}

export default SignIn;
