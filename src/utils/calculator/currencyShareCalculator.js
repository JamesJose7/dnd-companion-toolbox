const calculateCurrencyShareDistribution = (players, currencies) => {
  const results = [];
  const numberOfPlayers = players.length;

  currencies
    .filter((currency) => currency.amount > 0)
    .forEach((currency) => {
      const basePay = Math.floor(currency.amount / numberOfPlayers);
      const currencyRemainder = currency.amount % numberOfPlayers;

      if (currencyRemainder === 0) {
        const currencyResult = buildEvenResult(currency, players, basePay);
        results.push(currencyResult);
      } else {
        const currencyResult = buildResultWithRemainder(
          currency,
          players,
          basePay,
          currencyRemainder
        );
        results.push(currencyResult);
      }
    });

  return results;
};

const buildEvenResult = (currency, players, basePay) => {
  const distribution = players.map((player) => ({
    player: player,
    d20Roll: undefined,
    currencyShare: basePay,
  }));
  return {
    currency,
    distribution,
  };
};

const buildResultWithRemainder = (
  currency,
  players,
  basePay,
  currencyRemainder
) => {
  let distribution = [];
  // Roll D20 for each player until there are no ties
  // This gives the positioning to receive the remainder
  let isRollTied = false;
  do {
    isRollTied = false;
    const rolls = [];
    distribution = [];
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const d20Roll = rollNDice(20);
      if (rolls.includes(d20Roll)) {
        isRollTied = true;
      } else {
        rolls.push(d20Roll);
      }

      distribution.push({ player, d20Roll, currencyShare: basePay });
    }
  } while (isRollTied);

  // Sort players based on d20 roll
  distribution.sort((a, b) => b.d20Roll - a.d20Roll);

  // Add an additional currency count to players based on the remainder
  for (let remainder = 0; remainder < currencyRemainder; remainder++) {
    distribution[remainder].currencyShare++;
  }

  return {
    currency,
    distribution,
  };
};

const rollNDice = (n) => {
  return Math.floor(Math.random() * n) + 1;
};

export default calculateCurrencyShareDistribution;
