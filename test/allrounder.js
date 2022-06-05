const axios = require('axios');
const { extractLinks } = require('../utils');

const getTestAll = async () => {
  const url = 'https://www.icc-cricket.com/rankings/mens/player-rankings/test/all-rounder';

  const fun = await axios.get(url).then((response) => {
    const html = response.data;
    extractLinks(html);
  });
};

module.exports = {
  getTestAll,
};
