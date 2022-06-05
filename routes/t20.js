const express = require('express');
const { results } = require('../utils');

const { getT20Bat } = require('../t20/bat');
const { getT20Bowl } = require('../t20/bowl');
const { getT20All } = require('../t20/Allrounder');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(`welcome to t20 rankings`);
});

router.get('/bat', async function (req, res) {
  await getT20Bat();
  res.json(results);
  results.length = 0;
});

router.get('/bowl', async function (req, res) {
  await getT20Bowl();
  res.json(results);
  results.length = 0;
});

router.get('/allrounder', async function (req, res) {
  await getT20All();
  res.json(results);
  results.length = 0;
});

module.exports = {
  t20Routes: router,
};
