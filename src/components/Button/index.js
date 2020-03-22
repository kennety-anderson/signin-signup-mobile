import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

const Button = ({ text = 'Enviar', loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{text}</Text>
      )}
    </Container>
  );
};

export default Button;
