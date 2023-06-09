import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import playersStorage from '../utils/storage/playersLocalStorage';
import ContentContainer from './common/ContentContainer';
import styled from '@emotion/styled';

const PlayersTitle = styled(Typography)`
  font-size: 3em;
  text-align: center;
`;

const PlayerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 50%;
  padding: 10px 30px;
  border-radius: 30px;
  background-color: rgba(188, 188, 188, 0.1);
  &:hover {
    background-color: rgba(188, 188, 188, 0.2);
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const PlayerName = styled(Typography)`
  width: 100%;
`;

const PlayerInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PlayerNameInput = styled(TextField)`
  flex: 1;
  margin-right: 20px;
`;

const AddPlayerButton = styled(Button)`
  align-self: stretch;
  padding-left: 40px;
  padding-right: 40px;
`;

const PlayersEditor = () => {
  const [players, setPlayers] = useState([]);
  const [playerInputValue, setPlayerInputValue] = useState('');

  useEffect(() => {
    const savedPlayers = playersStorage.getPlayers();
    setPlayers(savedPlayers);
  }, []);

  const handlePlayerInputChange = (event) => {
    setPlayerInputValue(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddPlayer();
    }
  };

  const handleAddPlayer = () => {
    if (!players.includes(playerInputValue)) {
      const newPlayers = [...players, playerInputValue];
      setPlayers(newPlayers);
      playersStorage.savePlayers(newPlayers);
      setPlayerInputValue('');
    } else {
      alert('Player already added!');
    }
  };

  const handleRemovePlayer = (playerToRemove) => {
    const newPlayers = players.filter((player) => player !== playerToRemove);
    setPlayers(newPlayers);
    playersStorage.savePlayers(newPlayers);
  };

  return (
    <ContentContainer my={3}>
      <PlayersTitle variant="h2" color="textPrimary" fontWeight={500} mb={5}>
        Who is Playing?
      </PlayersTitle>
      <PlayerInputContainer>
        <PlayerNameInput
          label="Player name"
          variant="outlined"
          value={playerInputValue}
          onChange={handlePlayerInputChange}
          onKeyPress={handleEnterKeyPress}
        />
        <AddPlayerButton variant="contained" onClick={handleAddPlayer}>
          Add
        </AddPlayerButton>
      </PlayerInputContainer>

      <Stack spacing={2} mt={5}>
        {players.map((player) => (
          <PlayerContainer key={player}>
            <PlayerName>{player}</PlayerName>
            <IconButton
              aria-label="delete"
              onClick={() => handleRemovePlayer(player)}
            >
              <DeleteIcon />
            </IconButton>
          </PlayerContainer>
        ))}
      </Stack>
    </ContentContainer>
  );
};

export default PlayersEditor;
