const User = require('../models/user');

exports.authenticate = async (req, res) => {
  const { userId } = req.body;
  try {
    let user = await User.findOne({ telegramId: userId });
    if (!user) {
      user = new User({ telegramId: userId });
      await user.save();
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  const { telegramId } = req.params;
  try {
    const user = await User.findOne({ telegramId }).populate('farm');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


