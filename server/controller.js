const generateWordsFromNumbers = require('./generateWordsFromNumbers');

const getPredictedText = (req, res) => {
  try {
    const numbersArray = req.params.query.split('');
    const suggestedWords = generateWordsFromNumbers(numbersArray).sort();
    res.status(200).send(suggestedWords);
    return;
  } catch {
    res.status(500).send('Internal server error: Server unable to process the request at this time');
    return;
  }
}

module.exports = getPredictedText;