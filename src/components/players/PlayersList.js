import React from 'react';
import { Box, IconButton, Stack, Typography, alpha } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import { colors } from '../../config/colors';

const PlayerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 50%;
  padding: 10px 30px;
  border-radius: 30px;
  background-color: ${alpha(colors.secondary, 0.1)};
  &:hover {
    background-color: ${alpha(colors.secondary, 0.2)};
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const PlayerName = styled(Typography)`
  width: 100%;
`;

const PlayerList = ({ players, onRemovePlayer }) => {
  return (
    <Stack spacing={2} mt={5}>
      {players.map((player) => (
        <PlayerContainer key={player}>
          <PlayerName>{player}</PlayerName>
          <IconButton
            aria-label="delete"
            onClick={() => onRemovePlayer(player)}
          >
            <DeleteIcon />
          </IconButton>
        </PlayerContainer>
      ))}
    </Stack>
  );
};

export default PlayerList;
