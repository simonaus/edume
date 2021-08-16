const generateWordsFromNumbers = require('./generateWordsFromNumbers');

const getPredictedText = (req, res) => {
  const numbersArray = req.params.query.split('');
  const suggestedWords = generateWordsFromNumbers(numbersArray).sort();
  res.status(200).send(suggestedWords);
  return;
}

module.exports = getPredictedText;