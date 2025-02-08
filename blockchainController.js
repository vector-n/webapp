const { transferTokens } = require('../utils/ton');

exports.transferTokens = async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const result = await transferTokens(from, to, amount);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};