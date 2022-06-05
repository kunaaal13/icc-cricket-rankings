const axios = require('axios');
const { extractLinks } = require('../utils');

const getOdiAll = async () => {
  const url = 'https://www.icc-cricket.com/rankings/mens/player-rankings/odi/all-rounder';

  const fun = await axios.get(url).then((response) => {
    const html = response.data;
    extractLinks(html);
  });
};

module.exports = {
  getOdiAll,
};
