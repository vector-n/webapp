const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  username: { type: String },
  tokens: { type: Number, default: 0 },
  farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm' },
});

module.exports = mongoose.model('User', userSchema);