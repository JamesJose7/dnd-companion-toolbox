import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PlayersEditor = () => {
  const [players, setPlayers] = useState([]);
  const [playerInputValue, setPlayerInputValue] = useState('');

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
      setPlayers([...players, playerInputValue]);
      setPlayerInputValue('');
    } else {
      alert('Player already added!');
    }
  };

  const handleRemovePlayer = (playerToRemove) => {
    const newPlayers = players.filter((player) => player !== playerToRemove);
    setPlayers(newPlayers);
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
          <Box>
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
