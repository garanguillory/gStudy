
exports.up = function(knex, Promise) {
   return knex.schema.createTable('cards', function(table){
   	table.increments();
    table.integer('deck_id').unsigned();
    table.foreign('deck_id').references('id').inTable('decks');
    table.text('question');
    table.text('question_image_url');
    table.text('answer');
    table.string('answer_image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
