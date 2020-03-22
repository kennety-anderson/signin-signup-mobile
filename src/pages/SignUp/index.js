import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, Alert } from 'react-native';

import Background from '../../components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';
import apiCustomer from '../../services/crud-customers/api';

const SingUp = ({ navigation }) => {
  const emailRef = useRef();
  const cpfRef = useRef();
  const birthdateRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [birthDate, setBirthDate] = useState();
  const [password, setPassword] = useState();

  const data = { name, email, cpf, birthDate, password };

  const handlerSubmit = async () => {
    try {
      await apiCustomer.post('customers', data);
      Alert.alert('Sucesso!', 'Conta criada com sucesso!', [
        {
          text: 'ok',
          onPress: () => navigation.navigate('SignIn'),
        },
      ]);
    } catch (err) {
      switch (err.response.status) {
        case 400:
          Alert.alert('Erro!', 'Verifique os campos enviados');
          break;
        case 422:
          Alert.alert('Erro!', 'Email já vinculado a uma conta existente!');
          break;
        default:
          Alert.alert('Erro!', 'Um erro aconteceu, por favor tente novamente!');
      }
    }
  };

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={text => setName(text)}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            placeholder="Digite seu email"
            ref={emailRef}
            value={email}
            onChangeText={text => setEmail(text)}
            onSubmitEditing={() => cpfRef.current.focus()}
          />
          <FormInput
            icon="assignment-ind"
            keyboardType="numeric"
            returnKeyType="next"
            placeholder="Digite seu cpf"
            ref={cpfRef}
            value={cpf}
            onChangeText={text => setCpf(text)}
            onSubmitEditing={() => birthdateRef.current.focus()}
          />
          <FormInput
            icon="date-range"
            returnKeyType="next"
            placeholder="Digite sua data de nascimento"
            ref={birthdateRef}
            value={birthDate}
            onChangeText={text => setBirthDate(text)}
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
          <SubmitButton onPress={handlerSubmit}>Registrar</SubmitButton>
        </Form>
        <SignUpLink
          onPress={() => {
            Keyboard.dismiss();
            navigation.navigate('SignIn');
          }}>
          <SignUpLinkText>Já tenho uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
};

export default SingUp;
