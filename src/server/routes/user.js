var express = require("express");
var router = express.Router();
var queries = require("../queries");

// get user by id
router.get("/:id", function(req, res, next) {
    var id = req.params.id;

    queries.getUser(id).then(function(user){
    	// where does 'user' go???
    	res.render("profile");
    })
});

module.exports = router;
