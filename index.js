const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require("@whiskeysockets/baileys")
const fs = require("fs")
const config = require("./config")

// KEEP BOT ALIVE (RENDER)
const PORT = process.env.PORT || 3000
require("http").createServer((req,res)=>res.end("SAT MD BOT Running")).listen(PORT)

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth")
    const { version } = await fetchLatestBaileysVersion()

    const sock = makeWASocket({ auth: state, version })

    sock.ev.on("creds.update", saveCreds)

    // AUTO PAIR
    if (!sock.authState.creds.registered) {
        const code = await sock.requestPairingCode(config.ownerNumber)
        console.log("🔥 PAIR CODE:", code)
    }

    // LOAD COMMANDS
    const commands = {}
    fs.readdirSync("./commands").forEach(file => {
        const cmd = require(`./commands/${file}`)
        commands[cmd.name] = cmd
    })

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0]
        if (!msg.message) return

        const from = msg.key.remoteJid
        const body = msg.message.conversation || msg.message.extendedTextMessage?.text || ""
        const args = body.trim().split(/ +/).slice(1)
        const command = body.startsWith(config.prefix)
            ? body.slice(1).split(" ")[0].toLowerCase()
            : null

        if (!command || !commands[command]) return

        commands[command].execute(sock, msg, args, config)
    })

    sock.ev.on("connection.update", ({ connection }) => {
        if (connection === "open") {
            console.log("✅ SAT MD BOT CONNECTED")
        }
    })
}

startBot()
