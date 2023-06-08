const playersKey = 'players';

const savePlayers = (players) => {
  localStorage.setItem(playersKey, JSON.stringify(players));
};

const getPlayers = () => {
  const savedPlayers = localStorage.getItem(playersKey);
  return savedPlayers ? JSON.parse(savedPlayers) : [];
};

const playersStorage = {
  savePlayers,
  getPlayers,
};

export default playersStorage;
