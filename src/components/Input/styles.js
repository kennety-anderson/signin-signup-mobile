import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  height: 40px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  flex: 1;
  font-size: 14px;
  margin: 0 10px;
  margin-left: 10px;
  color: #ffff;
`;
