exports.playLottery = async (req, res) => {
  const { userId } = req.body;
  try {
    // Deduct 10 tokens for playing the lottery
    const user = await User.findById(userId);
    if (user.tokens < 10) {
      return res.status(400).json({ error: 'Not enough tokens' });
    }
    user.tokens -= 10;

    // Simulate lottery result
    const result = Math.random() < 0.5 ? 'You won 50 tokens!' : 'Better luck next time!';
    if (result.includes('won')) {
      user.tokens += 50;
    }

    await user.save();
    res.status(200).json({ message: result, tokens: user.tokens });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};