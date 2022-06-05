const cheerio = require('cheerio');

let results = [];
async function extractLinks(html) {
  let $ = cheerio.load(html);

  // getting first player
  await getFirstEntry(html);

  //getting rest of the players
  await getRestEntry(html);
}

async function getFirstEntry(html) {
  let $ = cheerio.load(html);

  let name = $('div.rankings-block__banner--name-large').text();

  let ranking = '1';

  let nationality = $('div.rankings-block__banner--nationality').text().trim();

  let rating = $('div.rankings-block__banner--rating').text();

  results.push({ ranking, name, nationality, rating });
}

async function getRestEntry(html, result) {
  let $ = cheerio.load(html);

  let rows = $('tr.table-body');

  for (let i = 0; i < rows.length; i++) {
    let data = $(rows[i]).find('td');

    let ranking = $(data[0]).find('span.rankings-table__pos-number').text().trim();

    let name = $(data[1]).find('a').text();

    let nationality = $(data[2]).find('span.table-body__logo-text').text().trim();

    let rating = $(data[3]).text();

    results.push({ ranking, name, nationality, rating });
  }
}

module.exports = {
  results,
  extractLinks,
};
