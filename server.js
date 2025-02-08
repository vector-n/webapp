const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const blockchainRoutes = require('./routes/blockchain');
const minigamesRoutes = require('./routes/minigames'); // Add this line
const { TonClient } = require('@tonclient/core');
const { libNode } = require('@tonclient/lib-node'); // Add this lib-node


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Initialize TON client
const client = new TonClient({
  network: {
    server_address: process.env.TON_NETWORK,
  },
  lib: libNode, // Use the Node.js library
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/blockchain', blockchainRoutes);
app.use('/api/minigames', minigamesRoutes); // Add this line

// Database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


