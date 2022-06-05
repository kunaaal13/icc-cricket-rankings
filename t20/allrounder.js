const axios = require('axios');
const { extractLinks } = require('../utils');

const getT20All = async () => {
  const url = 'https://www.icc-cricket.com/rankings/mens/player-rankings/t20i/all-rounder';

  const fun = await axios.get(url).then((response) => {
    const html = response.data;
    extractLinks(html);
  });
};

module.exports = {
  getT20All,
};
