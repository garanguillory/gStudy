
var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'decks',
  file: './data/decks.csv'
});