const axios = require('axios');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

exports.verifyTelegramUser = async (initData) => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`,
      { initData }
    );
    return response.data;
  } catch (err) {
    throw new Error('Failed to verify Telegram user');
  }
};