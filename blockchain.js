const express = require('express');
const router = express.Router();
const blockchainController = require('../controllers/blockchainController');

// Define routes
router.post('/transfer', blockchainController.transferTokens);

module.exports = router;