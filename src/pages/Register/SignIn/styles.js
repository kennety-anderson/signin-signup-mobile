import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container =
  Platform.OS === 'ios'
    ? styled.KeyboardAvoidingView.attrs({
        enable: true,
        behavior: 'padding',
      })`
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
      `
    : styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
      `;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 40px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignUpLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const Error = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;
