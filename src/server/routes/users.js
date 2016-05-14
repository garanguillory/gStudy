var express = require("express");
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var knex = require('../../../db/knex.js');
var queries = require("../../../queries");


// get all decks assoociated with a user
router.get('/:id/decks', function(req, res, next){
	var id = req.params.id;

	queries.getDecksByUser(id)
		.then(function(decks) {
			console.log('decks: ', decks);
		  res.status(200).json({
		    status: 'success',
		    data: decks
		  });
		})
		.catch(function (err) {
		  return next(err);
		});

});

// WORKS
// get a single deck by id (and associated cards)
router.get('/deck/:id', function(req, res, next){
	var id = req.params.id;

	queries.getDeckInfo(id)
		.then(function(deck){
			queries.getCards(deck[0].id)
				.then(function(cards){
					deck[0].cards = cards;
					res.status(200).json({
					  status: 'success',
					  data: deck[0]
					});
				})
		})
		.catch(function (err) {
		  return next(err);
		});
});


// get a single deck by id (show cards in html)
// router.get('/study/:id', function(req, res, next){
// 	var id = req.params.id;

// 	queries.getDeck(id)
// 		.then(function(deck) {
// 			console.log('deck: ', deck);
// 		  res.status(200).json({
// 		    status: 'success',
// 		    data: deck
// 		  });
// 		})
// 		.catch(function (err) {
// 		  return next(err);
// 		});
// });

// + + + + + + + + + + + + + + + + + + + + + + 

// edit deck (by id) and associated cards
router.put('/editdeck/:id', function(req, res, next){
	var id = req.params.id;
	var data = req.body;
	var deckData = {
		name: data.name,
		description: data.description,
		image_url: data.image_url
	};

	queries.updateDeck(deckData, data.id)
		.then(function() {
			// var id = Number(id);
			console.log('data: ', data);
			var promises = data.cards.map(function(card){
				var cardData = {
					id: card.id,
					question: card.question,
					answer: card.answer,
					image_url: card.image_url   // add question image_url and answer image_url
				};

				if ( card.delete ) {
					return queries.deleteCard(cardData.id)
				} else {
					return queries.updateCards(cardData, cardData.id)	
				}
			});

			return Promise.all(promises);
		})
		.then(function(){
			console.log('data.id: ', data.id)
			
			var promises = data.newcards.map(function(card){
				if(card.hasOwnProperty('question')){
					var cardData = {
						deck_id: data.id,
						question: card.question,
						answer: card.answer,
						image_url: card.image_url
					};
					return queries.addCard(cardData)
				}
			});
			return Promise.all(promises);
		})
		.then(function(cardIdArray){
			res.status(200).json({
			  status: 'success',
			  data: cardIdArray
			});

		})
		.catch(function (err) {
		  return next(err);
		});
});

// + + + + + + + + + + + + + + + + + + + + + +


// add a deck and add associated cards
router.post('/newdeck', function(req, res, next){
	var data = req.body;
	var deckData = {
		name: data.name,
		description: data.description,
		image_url: data.image_url,
		user_id: data.user_id
	};

	queries.addDeck(deckData)
		.then(function(id) {
			var id = Number(id);
			var promises = data.cards.map(function(card){
				var cardData = {
					deck_id: id,
					question: card.question,
					answer: card.answer,
					image_url: card.image_url
				};
				return queries.addCard(cardData)
			});
			return Promise.all(promises);
		})
		.then(function(cardIdArray){
			res.status(200).json({
			  status: 'success',
			  data: cardIdArray
			});
		})
		.catch(function (err) {
		  return next(err);
		});
});

// + + + + + + + + + + + + + + + + + + + + + +

// delete a single deck by id
router.delete('/deck/:deck_id/delete', function(req, res, next){
	var deck_id = req.params.deck_id;

	queries.deleteCards(deck_id)
		.then(function() {
			return queries.deleteDeck(deck_id)
		})
		.then(function(){
			res.status(200).json({
			  status: 'success',
			});
		})
		.catch(function (err) {
		  return next(err);
		});
});

// + + + + + + + + + + + + + + + + + + + + + +

// get user by id
router.get("/:id", function(req, res, next) {
    var id = req.params.id;

    queries.getUser(id).then(function(user){
    	// where does 'user' go???
    	res.render("profile");
    })
});

module.exports = router;


