
var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'users',
  file: './data/users.csv'
});