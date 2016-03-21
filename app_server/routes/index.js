var express = require('express');
var router = express.Router();
var ctrlVillages = require('../controllers/villages');
var ctrlOthers = require('../controllers/others');

/* Villages Pagees */
router.get('/', ctrlVillages.homelist);
router.get('/village',ctrlVillages.villageInfo);

/* Other pages */

router.get('/about',ctrlOthers.about);

module.exports = router;