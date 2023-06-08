import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const CurrencyInput = ({
  currencies,
  onCurrencyChange,
  calculateCurrencyDistribution,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {currencies.map((currency) => (
          <Grid item xs={2} key={currency.id}>
            <Typography>{currency.name}</Typography>
            <TextField
              type="number"
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
    </Box>
  );
};

export default CurrencyInput;
