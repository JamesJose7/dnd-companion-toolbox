import React from 'react';
import { Grid, Typography } from '@mui/material';
import PlayerCurrencyResult from './PlayerCurrencyResult';

const CurrencyShareResult = ({ distributionResult }) => {
  return (
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
            <PlayerCurrencyResult playerResult={playerResult} />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default CurrencyShareResult;
