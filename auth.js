const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes
router.post('/authenticate', authController.authenticate);
router.get('/user/:telegramId', authController.getUser);

module.exports = router;