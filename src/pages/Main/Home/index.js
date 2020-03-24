import React from 'react';

import Background from '../../../components/Background';
import { Container, HelloHome, Button, TextButton } from './styles';

function Home() {
  return (
    <Background>
      <Container>
        <HelloHome>Home Page</HelloHome>
      </Container>
    </Background>
  );
}

export default Home;
