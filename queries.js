
var knex = require('./db/knex');

function Users() {
    return knex('users');
}

module.exports = {

    Users: function() {
        return Users();
    },

    getDecksByUser: function(user_id) {
        return knex.select('users.id', 'decks.id', 'decks.name', 'decks.description', 'decks.image_url')
        					 .from('decks')
        					 .rightJoin('users', 'decks.user_id', 'users.id')
        					 .where('users.id', user_id);
    },

    getDeck: function(deck_id) {
        return knex.select('decks.id', 'decks.name', 'decks.description', 'decks.image_url', 'cards.question', 'cards.answer', 'cards.image_url')
        					 .from('decks')
        					 .rightJoin('cards', 'decks.id', 'cards.deck_id')
        					 .where('cards.deck_id', deck_id);
    },

    // + + + + + + + + + + + + + + + + + + + + + + 

    // addDeck: function(user_id){

    // },

    // + + + + + + + + + + + + + + + + + + + + + + 

    CheckEmail: function(email) {
        return Users().where('email', email);
    },
    NewUser: function(data) {
        return Users().insert(data)
        .returning('*');
    },
    getUser: function(id){
        // Get User by ID
        return Users().where('id',id);
    }
}

					// SELECT decks.id, decks.name, decks.description, cards.question, cards.answer, cards.image_url
					// FROM decks RIGHT JOIN cards
					// ON decks.id=cards.deck_id
					// WHERE cards.deck_id=1;

// return knex.select('beers.brewery as brewery_name', 'beers.name as beer_name', 'beers.abv')
//            .from('breweries')
//            .rightJoin('beers','beers.brewery','breweries.name')
//            .where('breweries.id',brewery_id);

// return knex.select('users.id', 'decks.id', 'decks.name', 'decks.description')
// 					 .from('decks')
// 					 .rightJoin('users', 'decks.user_id', 'users.id')
// 					 .where('users.id',id);


           // SELECT users.id, decks.id, decks.name, decks.description
           // FROM decks
           // RIGHT JOIN users
           // ON decks.user_id=users.id
           // WHERE users.id=4;

