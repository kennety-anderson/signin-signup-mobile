import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#b9046e', '#570388'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
`;
