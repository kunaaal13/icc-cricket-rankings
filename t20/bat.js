const axios = require('axios');
const { extractLinks } = require('../utils');

const getT20Bat = async () => {
  const url = 'https://www.icc-cricket.com/rankings/mens/player-rankings/t20i/batting';

  const fun = await axios.get(url).then((response) => {
    const html = response.data;
    extractLinks(html);
  });
};

module.exports = {
  getT20Bat,
};
