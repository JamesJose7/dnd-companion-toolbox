const currencies = [
  'Platinum (PP)',
  'Gold (GP)',
  'Electrum (EP)',
  'Silver(SP)',
  'Copper (CP)',
];

const getAvailableCurrencies = () => {
  return currencies.map((currency, i) => buildBaseCurrency(currency, i));
};

const buildBaseCurrency = (name, i) => ({
  id: i,
  name: name,
  amount: 0,
});

export default getAvailableCurrencies;
