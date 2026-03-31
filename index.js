const { default: makeWASocket, useSingleFileAuthState, downloadContentFromMessage } = require('@whiskeysockets/baileys');
const { state, saveState } = useSingleFileAuthState('./auth.json');
const config = require('./config');
const { loadCommands } = require('./handler');

const commands = loadCommands();

const startBot = async () => {

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on('creds.update', saveState);

    sock.ev.on('messages.upsert', async ({ messages }) => {

        const msg = messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const text = msg.message.conversation || msg.message.extendedTextMessage?.text || "";
        const from = msg.key.remoteJid;

        // 🔥 QUIZ SYSTEM
        if (global.quiz && global.quiz[from]) {
            if (text.toLowerCase() === global.quiz[from].toLowerCase()) {
                await sock.sendMessage(from, { text: "✅ Correct!" });
                delete global.quiz[from];
            }
        }

        // 🔥 ANTI LINK
        if (text.includes("chat.whatsapp.com")) {
            if (global.antilink && global.antilink[from]) {
                return sock.sendMessage(from, { text: "🚫 Links not allowed!" });
            }
        }

        // 🔥 AUTO VOICE DETECTION
        if (msg.message?.audioMessage) {
            const voiceCmd = commands.find(c => c.name === "voiceai");
            if (voiceCmd) return voiceCmd.execute(sock, msg, "", config);
        }

        if (!text.startsWith(config.prefix)) return;

        const commandName = text.slice(1).split(" ")[0].toLowerCase();

        for (let cmd of commands) {
            if (cmd.name === commandName) {
                try {
                    await cmd.execute(sock, msg, text, config);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    });

    console.log("🚀 SAT MD BOT RUNNING");
};

startBot();
