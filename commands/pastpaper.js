const fs = require("fs")
const path = require("path")

module.exports = {
    name: "pastpaper",
    async execute(sock, msg, args) {
        const from = msg.key.remoteJid
        const year = args[1]
        const subject = args.slice(2).join("_").toLowerCase()

        const file = path.join(__dirname, "../papers", `${subject}_${year}.pdf`)

        if (fs.existsSync(file)) {
            await sock.sendMessage(from, {
                document: fs.readFileSync(file),
                fileName: `${subject}_${year}.pdf`,
                mimetype: "application/pdf"
            })
        } else {
            await sock.sendMessage(from, { text: "❌ Not found" })
        }
    }
              }
