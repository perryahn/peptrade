const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/content/views/', 'index.html'));
});

router.get('/portfolio', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/content/views/', 'index.html'));
});

module.exports = router;
