import calculateCurrencySplit, {
  buildResultWithRemainder,
} from './currencyShareCalculator';

describe('calculateCurrencySplit', () => {
  test('should split currency evenly when there is no remainder', () => {
    const players = ['Player 1', 'Player 2', 'Player 3'];
    const currencies = [{ amount: 90 }, { amount: 150 }, { amount: 300 }];

    const expectedResults = [
      {
        currency: { amount: 90 },
        split: [
          { player: 'Player 1', d20Roll: undefined, currencyShare: 30 },
          { player: 'Player 2', d20Roll: undefined, currencyShare: 30 },
          { player: 'Player 3', d20Roll: undefined, currencyShare: 30 },
        ],
      },
      {
        currency: { amount: 150 },
        split: [
          { player: 'Player 1', d20Roll: undefined, currencyShare: 50 },
          { player: 'Player 2', d20Roll: undefined, currencyShare: 50 },
          { player: 'Player 3', d20Roll: undefined, currencyShare: 50 },
        ],
      },
      {
        currency: { amount: 300 },
        split: [
          { player: 'Player 1', d20Roll: undefined, currencyShare: 100 },
          { player: 'Player 2', d20Roll: undefined, currencyShare: 100 },
          { player: 'Player 3', d20Roll: undefined, currencyShare: 100 },
        ],
      },
    ];

    const results = calculateCurrencySplit(players, currencies);

    expect(results).toEqual(expectedResults);
  });

  test('should split currency with remainder using d20 rolls', () => {
    // Test case with 4 players and 5 currency units
    const players = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
    const currencies = [{ amount: 5 }];

    // The d20 rolls are random, so we can't provide exact expected results
    // We can only check if the split has the correct structure and the currencyShare values sum up to the currency amount
    const results = calculateCurrencySplit(players, currencies);

    expect(results.length).toBe(1);
    expect(results[0].currency).toEqual({ amount: 5 });
    expect(results[0].split.length).toBe(4);

    const currencyShareSum = results[0].split.reduce(
      (sum, player) => sum + player.currencyShare,
      0
    );
    expect(currencyShareSum).toBe(5);
  });
});

describe('buildResultWithRemainder', () => {
  test('should correctly build result with remainder', () => {
    const currency = { amount: 10 };
    const players = ['Player 1', 'Player 2', 'Player 3'];
    const basePay = 3;
    const currencyRemainder = 1;

    const expectedResult = {
      currency: { amount: 10 },
      split: [
        {
          player: expect.any(String),
          d20Roll: expect.any(Number),
          currencyShare: 4,
        },
        {
          player: expect.any(String),
          d20Roll: expect.any(Number),
          currencyShare: 3,
        },
        {
          player: expect.any(String),
          d20Roll: expect.any(Number),
          currencyShare: 3,
        },
      ],
    };

    const result = buildResultWithRemainder(
      currency,
      players,
      basePay,
      currencyRemainder
    );

    expect(result).toEqual(expectedResult);
    const currencyShareSum = result.split.reduce(
      (sum, player) => sum + player.currencyShare,
      0
    );
    expect(currencyShareSum).toBe(expectedResult.currency.amount);
  });
});
