import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const CurrencyInput = ({
  currencies,
  onCurrencyChange,
  calculateCurrencyDistribution,
  clearCurrencies,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {currencies.map((currency) => (
          <Grid item xs={2} key={currency.id}>
            <Typography>{currency.name}</Typography>
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
      <Button variant="contained" onClick={calculateCurrencyDistribution}>
        Calculate
      </Button>
      <Button variant="contained" onClick={clearCurrencies}>
        Clear
      </Button>
    </Box>
  );
};

export default CurrencyInput;
