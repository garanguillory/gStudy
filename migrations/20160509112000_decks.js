
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('description');
    table.string('image_url');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
