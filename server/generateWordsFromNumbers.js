const numbersToLettersMapping = require('./numbersToLettersMapping');

const generateWordsFromNumbers = (numbers) => {
  let words = [];

  if (numbers[0]) {

    const currentNumber = numbers[0];
    const remainingNumbers = numbers.slice(1);

    const wordsBeforeCurrentNumber = generateWordsFromNumbers(remainingNumbers);

    for (let letter of numbersToLettersMapping[currentNumber]) {
      if (wordsBeforeCurrentNumber.length > 0) {
        for (let word of wordsBeforeCurrentNumber) {
          words = [...words, letter + word];
        }
      } else {
        words = [...words, letter];
      }
    }
  }
  return words;
};

module.exports = generateWordsFromNumbers;