var express = require("express");
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var knex = require('../../../db/knex.js');
var queries = require("../../../queries");


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
			console.log('data: ', data);
			var promises = data.cards.map(function(card){
				var cardData = {
					id: card.id,
					question: card.question,
					question_image_url: card.question_image_url,
					answer: card.answer,
					answer_image_url: card.answer_image_url
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
						question_image_url: card.question_image_url,
						answer: card.answer,
						answer_image_url: card.answer_image_url
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
					question_image_url: card.question_image_url,
					answer: card.answer,
					answer_image_url: card.answer_image_url
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


module.exports = router;


