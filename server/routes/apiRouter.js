const express = require('express');

const router = express.Router();

const ApiClient = require('../lib/alpacastuff/ApiClient');

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


module.exports = router;
