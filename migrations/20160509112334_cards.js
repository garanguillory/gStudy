
exports.up = function(knex, Promise) {
   return knex.schema.createTable('cards', function(table){
    table.integer('deck_id').unsigned();
    table.foreign('deck_id').references('id').inTable('decks');
    table.text('question');
    table.text('answer');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
