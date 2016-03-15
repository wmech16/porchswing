var router = require('express').Router();

//api router will mount other routers
//for all our resources. Each resource directory
//has a resourceRoutes.js file with the router ready to go,
//require them and mount them to their respective routes below

router.use('/user', require('./user/userRoutes'));
router.use('/review', require('./review/reviewRoutes'));
router.use('/album', require('./album/albumRoutes'));

module.exports = router;