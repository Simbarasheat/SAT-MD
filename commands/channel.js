module.exports = {
    name: "channel",
    async execute(sock, msg) {
        await sock.sendMessage(msg.key.remoteJid, {
            text: "📢 Follow:\nhttps://whatsapp.com/channel/0029VbCHC3dIt5s59dq0u92e"
        })
    }
}
