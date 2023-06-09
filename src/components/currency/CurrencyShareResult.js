import React from 'react';
import { Grid, Typography, alpha, styled } from '@mui/material';
import PlayerCurrencyResult from './PlayerCurrencyResult';
import { colors } from '../../config/colors';

const TableTitle = styled(Typography)`
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Header = styled(Grid)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${alpha(colors.secondary, 1)};
`;

const TextCell = styled(Typography)`
  padding: 12px 15px;
  color: ${colors.light};
  font-weight: 500;
`;

const CurrencySplitResult = ({ splitResult }) => {
  return (
    <Grid container spacing={4}>
      {splitResult.map((result) => (
        <Grid item xs={12} md={6} py={2}>
          <TableTitle>{result.currency.name}</TableTitle>
          <Header container>
            <Grid item xs={8}>
              <TextCell>Player</TextCell>
            </Grid>
            <Grid item xs={2}>
              <TextCell textAlign="center">D20</TextCell>
            </Grid>
            <Grid item xs={2}>
              <TextCell textAlign="center">Share</TextCell>
            </Grid>
          </Header>
          {result.split.map((playerResult) => (
            <PlayerCurrencyResult playerResult={playerResult} />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default CurrencySplitResult;
