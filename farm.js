const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  type: { type: String, required: true },
  plantedAt: { type: Date, default: Date.now },
  growthTime: { type: Number, required: true }, // in milliseconds
});

const farmSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  crops: [cropSchema],
});

module.exports = mongoose.model('Farm', farmSchema);