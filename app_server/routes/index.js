var express = require('express');
var router = express.Router();
var ctrlVillages = require('../controllers/villages');
var ctrlOthers = require('../controllers/others');
var passport=require('passport');

/* Villages Pagees */
router.get('/', ctrlVillages.login);
router.get('/village',ctrlVillages.villageInfo);

/* Other pages */

router.get('/about',ctrlOthers.about);

router.get('/auth/facebook', passport.authenticate('facebook',{ scope: [ 'email' ] }));

router.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/village', 
    failureRedirect: '/about' }));


module.exports = router;