const axios = require("axios")

module.exports = {
    name: "ai",
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid
        const q = args.join(" ")

        if (!q) return sock.sendMessage(from, { text: "❌ Ask something" })

        const res = await axios.get(`https://api.popcat.xyz/chatbot?msg=${q}&owner=SAT&botname=SAT`)
        await sock.sendMessage(from, { text: res.data.response })
    }
          }
