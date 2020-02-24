const express = require('express');

const router = express.Router();

const ApiClient = require('../lib/alpacastuff/ApiClient');
const DataClient = require('../lib/sp500/DataClient');

router.get('/account', async (req, res) => {
  const client = new ApiClient();

  const result = await client.account();

  return res.send(result);
});

router.get('/activities', async (req, res) => {
  const client = new ApiClient();

  const result = await client.activities();

  return res.send(result);
});

router.get('/positions', async (req, res) => {
  const client = new ApiClient();

  const result = await client.positions();

  return res.send(result);
});

router.get('/bars', async (req, res) => {
  const client = new ApiClient();

  const { symbols } = req.query;

  const result = await client.bars({
    symbols,
  });

  return res.send(result);
});

router.get('/sp500', async (req, res) => {
  const client = new DataClient();

  const stream = await client.sp500stream();
  stream.pipe(res);
});

module.exports = router;
