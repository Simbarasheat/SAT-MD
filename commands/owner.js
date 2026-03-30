module.exports = {
    name: "pair",
    async execute(sock, msg, args, config) {
        const sender = msg.key.participant || msg.key.remoteJid

        if (!sender.includes(config.ownerNumber)) {
            return sock.sendMessage(msg.key.remoteJid, { text: "❌ Owner only" })
        }

        const number = args[0]
        if (!number) return sock.sendMessage(msg.key.remoteJid, { text: "❌ .pair 260..." })

        const code = await sock.requestPairingCode(number)
        console.log("🔥 Pair Code:", code)

        await sock.sendMessage(msg.key.remoteJid, {
            text: "✅ Check terminal for pairing code"
        })
    }
              }
