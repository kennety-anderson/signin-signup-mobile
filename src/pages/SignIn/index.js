import React, { useState, useRef } from 'react';
import { Keyboard } from 'react-native';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';

const SignIn = ({ navigation }) => {
  const passwordRef = useRef();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Background>
      <Container>
        <Form>
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
            // onSubmitEditing={handleSubmit}
          />
          <SubmitButton>Entrar</SubmitButton>
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
};

export default SignIn;
