import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import playersStorage from '../utils/storage/playersLocalStorage';

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
    <Box>
      <Typography>Players</Typography>
      <TextField
        label="Player name"
        variant="outlined"
        value={playerInputValue}
        onChange={handlePlayerInputChange}
        onKeyPress={handleEnterKeyPress}
      />
      <Button variant="contained" onClick={handleAddPlayer}>
        Add
      </Button>

      <Box>
        {players.map((player) => (
          <Box key={player}>
            <Typography>{player}</Typography>
            <IconButton
              aria-label="delete"
              onClick={() => handleRemovePlayer(player)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PlayersEditor;
