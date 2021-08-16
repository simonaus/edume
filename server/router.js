const express = require('express');
const { Router } = express;
const router = Router();
const generateSuggestedWords = require('./controller');

router.get('/suggestedWords', generateSuggestedWords);

module.exports = router;