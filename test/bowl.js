const axios = require('axios');
const { extractLinks } = require('../utils');

const getTestBowl = async () => {
  const url = 'https://www.icc-cricket.com/rankings/mens/player-rankings/odi/bowling';

  const fun = await axios.get(url).then((response) => {
    const html = response.data;
    extractLinks(html);
  });
};

module.exports = {
  getTestBowl,
};
