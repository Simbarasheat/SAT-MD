module.exports = {
    name: "menu",
    execute: async (sock, msg, text, config) => {

        const menu = `
╭┈───〔 SAT MD BOT V4 〕┈───⊷
├▢ 🤖 Owner: ${config.owner}
├▢ 📜 Commands: 300+
├▢ 📦 Prefix: .
├▢ ⚙️ Mode: public
╰───────────────────⊷

1️⃣ AI
2️⃣ Educational
3️⃣ Downloader
4️⃣ Group
5️⃣ Fun

📚 Education:
.pastpaper Zambia 2020 Maths Paper1
.textbook Zambia Biology
.research What is energy?
.quiz
.notes photosynthesis
.exam
.voice Explain gravity

🤖 AI:
.gpt Hello
`;
        await sock.sendMessage(msg.key.remoteJid, { text: menu });
    }
};
