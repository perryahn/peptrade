const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');

const apiRouter = require('./routes/apiRouter');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(logger('dev'));

const port = process.env.PORT || 3001;

app.use('/api', apiRouter);

app.listen(port);

module.exports = app;