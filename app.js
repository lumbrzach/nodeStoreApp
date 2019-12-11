const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const storeRoutes = require('./routes/storeRoutes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/store', storeRoutes);

app.get('/', (req, res, next) => {
  res.status(200).send('<html><body><h1>Welcome to Express</h1></body></html>');
});

app.listen(3000);
