const express = require('express');
const { Router } = express;
const router = Router();
const getPredictedText = require('./controller');

router.get('/:query', getPredictedText);

module.exports = router;