const express = require('express');
const moment = require('moment');

const router = express.Router();

const ApiClient = require('../lib/alpacastuff/ApiClient');
const DataClient = require('../lib/sp500/DataClient');

router.get('/account', async (req, res) => {
  const client = new ApiClient();

  const result = await client.getAccount();

  return res.send(result);
});


router.get('/sp500', async (req, res) => {
  const client = new DataClient();

  const stream = await client.sp500stream();
  stream.pipe(res);
});

router.post('/pepTradeOrder', async (req, res) => {
  const { body } = req;

  if (!body.symbol) {
    return res.status(400).send({
      message: 'Missing stock symbol',
    });
  }

  const client = new ApiClient();

  const orders = await client.getOrders({
    startDate: moment().add(-1, 'minutes').toISOString(),
  });

  if (orders && orders.length > 0) {
    return res.status(400).send({
      message: 'Please wait at least 1 minute between orders',
    });
  }

  const order = {
    symbol: body.symbol,
    qty: '1',
    side: 'buy',
    type: 'market',
    time_in_force: 'gtc',
  };

  const result = await client.placeOrder(order);

  return res.send(result);
});

router.get('/activities', async (req, res) => {
  const client = new ApiClient();

  const result = await client.getActivities();

  return res.send(result);
});

router.get('/positions', async (req, res) => {
  const client = new ApiClient();

  const result = await client.getPositions();

  return res.send(result);
});

module.exports = router;
