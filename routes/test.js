const express = require('express');
const { results } = require('../utils');
const { getTestBat } = require('../test/bat');
const { getTestBowl } = require('../test/bowl');
const { getTestAll } = require('../test/Allrounder');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(`welcome to test rankings`);
});

router.get('/bat', async function (req, res) {
  await getTestBat();
  res.json(results);
  results.length = 0;
});

router.get('/bowl', async function (req, res) {
  await getTestBowl();
  res.json(results);
  results.length = 0;
});

router.get('/allrounder', async function (req, res) {
  await getTestAll();
  res.json(results);
  results.length = 0;
});

module.exports = {
  testRoutes: router,
};
