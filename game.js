const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Define routes
router.post('/plant', gameController.plantCrop);
router.post('/harvest', gameController.harvestCrop);
router.get('/farm', gameController.getFarm); // Now this works!

module.exports = router;