const axios = require('axios');

module.exports = {
    name: "gpt",
    execute: async (sock, msg, text, config) => {

        const query = text.replace('.gpt', '').trim();

        const res = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: query }]
            },
            {
                headers: {
                    Authorization: `Bearer ${config.apiKeys.openai}`
                }
            }
        );

        const reply = res.data.choices[0].message.content;

        await sock.sendMessage(msg.key.remoteJid, { text: reply });
    }
};
