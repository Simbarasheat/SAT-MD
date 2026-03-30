module.exports = {
    name: "dice",
    async execute(sock, msg) {
        let n = Math.floor(Math.random()*6)+1
        await sock.sendMessage(msg.key.remoteJid, { text: `🎲 ${n}` })
    }
}
