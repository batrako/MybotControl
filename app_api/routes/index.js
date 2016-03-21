var express = require('express');
var router = express.Router();
var ctrlVillages = require('../controllers/villages');

// villages
router.get('/villages', ctrlVillages.villagesList);
router.post('/villages', ctrlVillages.villagesCreate);
router.get('/villages/:villageid', ctrlVillages.villagesReadOne);
router.put('/villages/:villageid', ctrlVillages.villagesUpdateOne);
router.delete('/villages/:villageid', ctrlVillages.villagesDeleteOne);

module.exports = router;
