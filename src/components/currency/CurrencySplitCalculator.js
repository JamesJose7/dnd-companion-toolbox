import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CurrencyInput from './CurrencyInput';
import playersStorage from '../../utils/storage/playersLocalStorage';
import calculateCurrencySplit from '../../utils/calculator/currencyShareCalculator';
import getAvailableCurrencies from '../../config/currencyData';
import CurrencySplitResult from './CurrencyShareResult';

const CurrencySplitCalculator = () => {
  const [currencies, setCurrencies] = useState(getAvailableCurrencies());
  const [splitResult, setSplitResult] = useState([]);

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

  const handleCalculateCurrencySplit = () => {
    const players = playersStorage.getPlayers();
    const results = calculateCurrencySplit(players, currencies);
    setSplitResult(results);
  };

  const handleClearCurrencies = () => {
    setCurrencies(getAvailableCurrencies());
    setSplitResult([]);
  };

  return (
    <Box py={5}>
      <CurrencyInput
        currencies={currencies}
        onCurrencyChange={handleCurrencyChange}
        calculateCurrencySplit={handleCalculateCurrencySplit}
        clearCurrencies={handleClearCurrencies}
      />

      <Typography mt={4}>Results</Typography>

      {splitResult.length > 0 && (
        <CurrencySplitResult splitResult={splitResult} />
      )}
    </Box>
  );
};

export default CurrencySplitCalculator;
