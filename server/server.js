const express = require('express');
const cors = require('cors')();
const router = require('./router');
require('dotenv').config();

const app = express();
app.use(cors);
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3005, () => {
  console.log(`Server listening on ${process.env.PORT || 3005}`);
});

module.exports = app;