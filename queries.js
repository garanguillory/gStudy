
var knex = require('./db/knex');

function Users() {
    return knex('users');
}

function Decks() {
    return knex('decks');
}

function Cards() {
    return knex('cards');
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

    getDeckInfo: function(deck_id){
        return Decks().where('id', deck_id);
    },

    getCards: function(deck_id){
        return Cards().where('deck_id', deck_id);
    },

    getDeck: function(deck_id) {
        return knex.select('decks.id', 'decks.name', 'decks.description', 'decks.image_url', 'cards.id', 'cards.question', 'cards.answer', 'cards.image_url')
        					 .from('decks')
        					 .rightJoin('cards', 'decks.id', 'cards.deck_id')
        					 .where('cards.deck_id', deck_id);
    },

    addDeck: function(deck){
    	return Decks().insert(deck).returning('id');
    },

    addCard: function(card){
    	return Cards().insert(card).returning('id');
    },

    updateDeck: function(newInfo, deck_id){
        return Decks().update(newInfo).where('id', deck_id);
    },

    updateCards: function(newInfo, card_id){
        return Cards().update(newInfo).where('id', card_id).returning('id');
    },

    // + + + + + + + + + + + + + + + + + + + + + + 

    deleteDeck: function(deck_id){
        return Decks().where('id', deck_id).del();
    },

    deleteCard: function(card_id){
        return Cards().where('id', card_id).del();
    },

    deleteCards: function(deck_id){
        return Cards().where('deck_id', deck_id).del();
    },

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

