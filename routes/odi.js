const express = require('express');
const { getOdiBat } = require('../odi/bat');
const { getOdiBowl } = require('../odi/bowl');
const { getOdiAll } = require('../odi/allrounder');
const { results } = require('../utils');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(`welcome to odi rankings`);
});

router.get('/bat', async function (req, res) {
  await getOdiBat();
  res.json(results);
});

router.get('/bowl', async function (req, res) {
  await getOdiBowl();
  res.json(results);
});

router.get('/allrounder', async function (req, res) {
  await getOdiAll();
  res.json(results);
});

module.exports = {
  odiRoutes: router,
};
