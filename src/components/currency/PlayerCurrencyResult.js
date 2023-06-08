import { Grid, Typography } from '@mui/material';
import React from 'react';

const PlayerCurrencyResult = ({ playerResult }) => {
  return (
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
  );
};

export default PlayerCurrencyResult;
