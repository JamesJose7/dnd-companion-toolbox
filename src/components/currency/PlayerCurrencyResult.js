import React from 'react';
import { Grid, Typography, alpha, styled } from '@mui/material';

import { colors } from '../../config/colors';

const Header = styled(Grid)`
  background-color: ${alpha(colors.secondary, 0.2)};

  &:last-of-type {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const TextCell = styled(Typography)`
  padding: 5px 15px;
  font-weight: 500;
`;

const PlayerCurrencyResult = ({ playerResult }) => {
  return (
    <Header container>
      <Grid item xs={8}>
        <TextCell>{playerResult.player}</TextCell>
      </Grid>
      <Grid item xs={2}>
        <TextCell textAlign="center">{playerResult.d20Roll}</TextCell>
      </Grid>
      <Grid item xs={2}>
        <TextCell textAlign="center">{playerResult.currencyShare}</TextCell>
      </Grid>
    </Header>
  );
};

export default PlayerCurrencyResult;
