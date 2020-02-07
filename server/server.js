const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const apiRouter = require('./routes/apiRouter');
const clientRouter = require('./routes/clientRouter');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

const port = process.env.PORT || 3001;

app.use('/api', apiRouter);

app.use('/client', express.static(path.join(__dirname, '../build')));

app.use('/', clientRouter);

app.listen(port);

module.exports = app;
