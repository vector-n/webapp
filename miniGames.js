const express = require('express');
const router = express.Router();
const minigamesController = require('../controllers/minigamesController');

// Define routes
router.post('/lottery', minigamesController.playLottery);

module.exports = router;