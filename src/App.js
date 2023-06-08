import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import PlayersEditor from './components/PlayersEditor';
import CurrencyInput from './components/CurrencyInput';

const Page = styled(Box)`
  min-height: 100vh;
`;

function App() {
  return (
    <Page>
      <Container>
        <PlayersEditor />
        <CurrencyInput />
      </Container>
    </Page>
  );
}

export default App;
