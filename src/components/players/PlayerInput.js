import React from 'react';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const PlayerInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const AddPlayerButton = styled(Button)`
  align-self: stretch;
  padding-left: 40px;
  padding-right: 40px;
`;

const PlayerNameInput = styled(TextField)`
  flex: 1;
  margin-right: 20px;
`;

const PlayerInput = ({
  onAddPlayer,
  playerInputValue,
  onPlayerInputChange,
}) => {
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      onAddPlayer();
    }
  };

  return (
    <PlayerInputContainer>
      <PlayerNameInput
        label="Player name"
        variant="outlined"
        value={playerInputValue}
        onChange={onPlayerInputChange}
        onKeyPress={handleEnterKeyPress}
      />
      <AddPlayerButton variant="contained" onClick={onAddPlayer}>
        Add
      </AddPlayerButton>
    </PlayerInputContainer>
  );
};

export default PlayerInput;
