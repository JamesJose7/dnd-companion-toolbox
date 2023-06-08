import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CurrencyInput from './CurrencyInput';
import playersStorage from '../../utils/storage/playersLocalStorage';
import calculateCurrencyShareDistribution from '../../utils/calculator/currencyShareCalculator';
import getAvailableCurrencies from '../../config/currencyData';
import CurrencyShareResult from './CurrencyShareResult';

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

  const handleClearCurrencies = () => {
    setCurrencies(getAvailableCurrencies());
    setDistributionResult([]);
  };

  return (
    <Box py={5}>
      <CurrencyInput
        currencies={currencies}
        onCurrencyChange={handleCurrencyChange}
        calculateCurrencyDistribution={handleCalculateCurrencyDistribution}
        clearCurrencies={handleClearCurrencies}
      />

      <Typography mt={4}>Results</Typography>

      {distributionResult.length > 0 && (
        <CurrencyShareResult distributionResult={distributionResult} />
      )}
    </Box>
  );
};

export default CurrencyDistributorCalculator;
