import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import PlayersEditor from './components/PlayersEditor';
import CurrencySplitCalculator from './components/currency/CurrencySplitCalculator';

import { colors } from './config/colors';
import { theme } from './config/theme';

const Page = styled(Box)`
  min-height: 100vh;
  background: ${colors.dark};
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Container>
          <PlayersEditor />
          <CurrencySplitCalculator />
        </Container>
      </Page>
    </ThemeProvider>
  );
}

export default App;
