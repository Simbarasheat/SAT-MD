module.exports = {
    name: "textbook",
    async execute(sock, msg, args) {
        const subject = args.slice(1).join(" ")
        await sock.sendMessage(msg.key.remoteJid, {
            text: `📖 Search textbook:\nhttps://www.google.com/search?q=${subject}+textbook+pdf`
        })
    }
}
