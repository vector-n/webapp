const { TonClient } = require('@tonclient/core');
const { libNode } = require('@tonclient/lib-node'); // Add this line

// Initialize the TON client
const client = new TonClient({
  network: {
    server_address: process.env.TON_NETWORK,
  },
  // Use the Node.js library
  lib: libNode,
});

// Function to transfer tokens
exports.transferTokens = async (from, to, amount) => {
  try {
    const result = await client.processing.process_message({
      message_encode_params: {
        address: from,
        abi: { /* ABI of your token contract */ },
        call_set: {
          function_name: 'transfer',
          input: { to, amount },
        },
      },
    });
    return result;
  } catch (err) {
    throw new Error(`TON transfer failed: ${err.message}`);
  }
};