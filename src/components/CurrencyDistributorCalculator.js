import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CurrencyInput from './CurrencyInput';
import playersStorage from '../utils/storage/playersLocalStorage';
import calculateCurrencyShareDistribution from '../utils/calculator/currencyShareCalculator';
import getAvailableCurrencies from '../config/currencyData';

const CurrencyDistributorCalculator = () => {
  const [currencies, setCurrencies] = useState(getAvailableCurrencies());
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
    const players = playersStorage.getPlayers();
    const results = calculateCurrencyShareDistribution(players, currencies);
    setDistributionResult(results);
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
