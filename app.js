const dotenv = require('dotenv');
dotenv.config();

const ApiClient = require('./lib/alpacastuff/ApiClient');

const client = new ApiClient();

client.account();