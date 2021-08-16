const generateWordsFromNumbers = require('./generateWordsFromNumbers');

describe('generateWordsFromNumbers function', () => {

  test('returns empty array if no numbers are provided', () => {
    expect(generateWordsFromNumbers([])).toEqual([]);
  })

  test('returns correct array of letters if one number is provided', () => {
    expect(generateWordsFromNumbers(['2'])).toEqual(['a', 'b', 'c']);
  })

  test('returns correct amount of letters if multiple number is provided', () => {
    expect(generateWordsFromNumbers(['2', '3']).length).toEqual(9);
  })

  test('returns correct array of letters if multiple number is provided in alphabetical order', () => {
    expect(generateWordsFromNumbers(['2', '3'])).toEqual(['ad', 'ad', 'ad', 'be', 'be', 'be', 'cf', 'cf', 'cf',]);
  })
})