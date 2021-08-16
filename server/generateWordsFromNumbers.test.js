const generateWordsFromNumbers = require('./generateWordsFromNumbers');

describe('generateWordsFromNumbers function', () => {

  test('returns empty array if no numbers are provided', () => {
    expect(generateWordsFromNumbers([])).toEqual([]);
  })

  test('returns correct array of letters if one number is provided', () => {
    expect(generateWordsFromNumbers(['2'])).toEqual(['a', 'b', 'c']);
  })

  test('returns correct array of letters if multiple number is provided', () => {
    expect(generateWordsFromNumbers(['2', '3'])).toEqual(['ad', 'bd', 'cd', 'ae', 'be', 'ce', 'af', 'bf', 'cf']);
  })
})