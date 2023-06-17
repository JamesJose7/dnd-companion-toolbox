import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import ContentContainer from '../common/ContentContainer';

import playersStorage from '../../utils/storage/playersLocalStorage';
import PlayerList from './PlayersList';
import PlayerInput from './PlayerInput';

const PlayersTitle = styled(Typography)`
  font-size: 3em;
  text-align: center;
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
      <PlayerInput
        onAddPlayer={handleAddPlayer}
        playerInputValue={playerInputValue}
        onPlayerInputChange={handlePlayerInputChange}
      />

      <PlayerList players={players} onRemovePlayer={handleRemovePlayer} />
    </ContentContainer>
  );
};

export default PlayersEditor;
