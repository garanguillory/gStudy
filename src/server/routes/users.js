var express = require("express");
var router = express.Router();
var moment = require('moment');
var jwt = require('jwt-simple');
var knex = require('../../../db/knex.js');
var queries = require("../../../queries");

// edit 

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

// + + + + + + + + + + + + + + + + + + + + + + 
router.get('/deck/:id', function(req, res, next){
	var id = req.params.id;

	queries.getDeck(id)
		.then(function(deck) {
			console.log('deck: ', deck);
		  res.status(200).json({
		    status: 'success',
		    data: deck
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


