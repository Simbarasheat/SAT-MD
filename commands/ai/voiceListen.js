module.exports = {
    name: "voiceai",
    execute: async (sock, msg) => {
        await sock.sendMessage(msg.key.remoteJid, {
            text: "🎤 Voice received (processing...)"
        });
    }
};
