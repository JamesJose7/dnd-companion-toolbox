const resultsMock = [
  {
    currency: { id: 1, name: 'Gold', amount: 10 },
    distribution: [
      {
        player: 'player 1',
        d20Roll: 20,
        currencyShare: 5,
      },
      {
        player: 'player 2',
        d20Roll: 20,
        currencyShare: 5,
      },
    ],
  },
  {
    currency: { id: 2, name: 'Copper', amount: 20 },
    distribution: [
      {
        player: 'player 1',
        d20Roll: 20,
        currencyShare: 10,
      },
      {
        player: 'player 2',
        d20Roll: 20,
        currencyShare: 10,
      },
    ],
  },
];

const singleResultMock = {
  currency: { id: 2, name: 'Copper', amount: 20 },
  distribution: [
    {
      player: 'player 1',
      d20Roll: 20,
      currencyShare: 10,
    },
    {
      player: 'player 2',
      d20Roll: 20,
      currencyShare: 10,
    },
  ],
};

const calculateCurrencyShareDistribution = (players, currencies) => {
  const results = [];
  const numberOfPlayers = players.length;

  currencies.forEach((currency) => {
    const basePay = Math.floor(currency.amount / numberOfPlayers);
    const currencyRemainder = currency.amount % numberOfPlayers;

    if (currencyRemainder === 0) {
      const currencyResult = buildEvenResult(currency, players, basePay);
      results.push(currencyResult);
    } else {
      results.push(singleResultMock);
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
    currency: currency,
    distribution: distribution,
  };
};

export default calculateCurrencyShareDistribution;
