module.exports = {
    name: "menu",
    async execute(sock, msg, args, config) {
        const text = `
🤖 ${config.botName}

📚 EDUCATION
.pastpaper
.textbook
.solve
.quiz

🤖 AI
.ai

🎮 FUN
.dice

🔐 OWNER
.pair

📢 OTHER
.channel
        `
        await sock.sendMessage(msg.key.remoteJid, { text })
    }
}
