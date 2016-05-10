
var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'cards',
  file: './data/cards.csv'
});