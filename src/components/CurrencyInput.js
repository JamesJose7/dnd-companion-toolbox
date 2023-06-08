import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const gameCurrencies = [
  {
    id: 1,
    name: 'Gold',
    amount: 0,
  },
  {
    id: 2,
    name: 'Copper',
    amount: 0,
  },
];

const CurrencyInput = () => {
  const [currencies, setCurrencies] = useState(gameCurrencies);

  const handleCurrencyChange = (id, newAmount) => {
    const modifiedCurrencies = [...currencies];
    const currencyIndex = modifiedCurrencies.findIndex(
      (currency) => id === currency.id
    );

    if (currencyIndex !== -1) {
      modifiedCurrencies[currencyIndex].amount = parseInt(newAmount) || 0;
      setCurrencies(modifiedCurrencies);
    }
  };

  const handleCalculateCurrencyDistribution = () => {
    console.log(currencies);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {currencies.map((currency) => (
          <Grid item xs={2} key={currency.id}>
            <Typography>{currency.name}</Typography>
            <TextField
              type="number"
              onChange={(event) =>
                handleCurrencyChange(currency.id, event.target.value)
              }
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={handleCalculateCurrencyDistribution}>
        Calculate
      </Button>
    </Box>
  );
};

export default CurrencyInput;
