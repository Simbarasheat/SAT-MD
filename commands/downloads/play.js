module.exports = {
    name: "play",
    execute: async (sock, msg, text) => {
        await sock.sendMessage(msg.key.remoteJid, {
            text: "🎵 Download feature ready"
        });
    }
};
