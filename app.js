const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const storeRoutes = require('./routes/storeRoutes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/store', storeRoutes);

app.listen(3000);
