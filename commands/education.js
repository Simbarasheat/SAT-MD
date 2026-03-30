module.exports = {
    name: "solve",
    async execute(sock, msg, args) {
        try {
            let result = eval(args.join(" "))
            await sock.sendMessage(msg.key.remoteJid, { text: `🧮 ${result}` })
        } catch {
            await sock.sendMessage(msg.key.remoteJid, { text: "❌ Error" })
        }
    }
}
