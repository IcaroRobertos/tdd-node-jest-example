const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);

module.exports = sum;
