const axios = require('axios');
const { extractLinks } = require('../utils');

const getOdiBat = async () => {
  const url = 'https://www.icc-cricket.com/rankings/mens/player-rankings/odi/batting';

  const fun = await axios.get(url).then((response) => {
    const html = response.data;
    extractLinks(html);
  });
};

module.exports = {
  getOdiBat,
};
