import React from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  styled,
} from '@mui/material';

const CalculatorButton = styled(Button)`
  margin-right: 20px;
`;

const CurrencyTitle = styled(Typography)`
  font-weight: 500;
  font-size: 1.2em;
`;

const CurrencyInput = ({
  currencies,
  onCurrencyChange,
  calculateCurrencySplit,
  clearCurrencies,
}) => {
  return (
    <Box>
      <Grid container spacing={2} mb={3}>
        {currencies.map((currency) => (
          <Grid item xs={12} md={2} key={currency.id}>
            <CurrencyTitle>{currency.name}</CurrencyTitle>
            <TextField
              type="number"
              value={currency.amount}
              onChange={(event) =>
                onCurrencyChange(currency.id, event.target.value)
              }
            />
          </Grid>
        ))}
      </Grid>
      <CalculatorButton variant="contained" onClick={calculateCurrencySplit}>
        Calculate
      </CalculatorButton>
      <Button variant="contained" onClick={clearCurrencies}>
        Clear
      </Button>
    </Box>
  );
};

export default CurrencyInput;
