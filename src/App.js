import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import PlayersEditor from './components/PlayersEditor';
import CurrencyDistributorCalculator from './components/currency/CurrencyDistributorCalculator';

const Page = styled(Box)`
  min-height: 100vh;
`;

function App() {
  return (
    <Page>
      <Container>
        <PlayersEditor />
        <CurrencyDistributorCalculator />
      </Container>
    </Page>
  );
}

export default App;
