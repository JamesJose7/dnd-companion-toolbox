import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CurrencyInput from './CurrencyInput';
import playersStorage from '../../utils/storage/playersLocalStorage';
import calculateCurrencySplit from '../../utils/calculator/currencyShareCalculator';
import getAvailableCurrencies from '../../config/currencyData';
import CurrencySplitResult from './CurrencyShareResult';
import ContentContainer from '../common/ContentContainer';
import styled from '@emotion/styled';

const Title = styled(Typography)`
  font-size: 3em;
  text-align: center;
`;

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
    <ContentContainer my={3}>
      <Title variant="h2" color="textPrimary" fontWeight={500} mb={5}>
        Currency Split Calculator
      </Title>
      <CurrencyInput
        currencies={currencies}
        onCurrencyChange={handleCurrencyChange}
        calculateCurrencySplit={handleCalculateCurrencySplit}
        clearCurrencies={handleClearCurrencies}
      />

      {splitResult.length > 0 && (
        <>
          <Typography variant="h4" mt={6} mb={2}>
            Results
          </Typography>
          <CurrencySplitResult splitResult={splitResult} />
        </>
      )}
    </ContentContainer>
  );
};

export default CurrencySplitCalculator;
