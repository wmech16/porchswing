var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route just to satisfy a request
// for building
router.route('/')
	.get(function(req, res) {
		logger.log('Hey from album!!!');
		res.send({ ok: true });
	});

module.exports = router;