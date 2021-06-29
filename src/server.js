'use strict';

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);


app.get('/', (req, res) => {
  res.status(200).send('We are live.');
});

app.get('/bad', (req, res) => {
  throw new Error('Error');
});

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};