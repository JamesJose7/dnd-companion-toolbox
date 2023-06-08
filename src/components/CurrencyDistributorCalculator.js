import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CurrencyInput from './CurrencyInput';

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

const resultsMock = [
  {
    currency: { id: 1, name: 'Gold', amount: 10 },
    distribution: [
      {
        player: 'player 1',
        d20Roll: 20,
        currencyShare: 5,
      },
      {
        player: 'player 2',
        d20Roll: 20,
        currencyShare: 5,
      },
    ],
  },
  {
    currency: { id: 2, name: 'Copper', amount: 20 },
    distribution: [
      {
        player: 'player 1',
        d20Roll: 20,
        currencyShare: 10,
      },
      {
        player: 'player 2',
        d20Roll: 20,
        currencyShare: 10,
      },
    ],
  },
];

const CurrencyDistributorCalculator = () => {
  const [currencies, setCurrencies] = useState(gameCurrencies);
  const [distributionResult, setDistributionResult] = useState([]);

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
    setDistributionResult(resultsMock);
  };

  return (
    <Box py={5}>
      <CurrencyInput
        currencies={currencies}
        onCurrencyChange={handleCurrencyChange}
        calculateCurrencyDistribution={handleCalculateCurrencyDistribution}
      />

      <Typography mt={4}>Results</Typography>

      {distributionResult.length > 0 && (
        <Grid container>
          {distributionResult.map((result) => (
            <Grid item xs={12} py={2}>
              <Typography>{result.currency.name}</Typography>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Player</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>D20</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>Share</Typography>
                </Grid>
              </Grid>
              {result.distribution.map((playerResult) => (
                <Grid container>
                  <Grid item xs={3}>
                    <Typography>{playerResult.player}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>{playerResult.d20Roll}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>{playerResult.currencyShare}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CurrencyDistributorCalculator;
