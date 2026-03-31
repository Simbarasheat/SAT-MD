const fs = require('fs');

const loadCommands = () => {
    let commands = [];
    const folders = fs.readdirSync('./commands');

    for (let folder of folders) {
        const files = fs.readdirSync(`./commands/${folder}`);
        for (let file of files) {
            const cmd = require(`./commands/${folder}/${file}`);
            commands.push(cmd);
        }
    }
    return commands;
};

module.exports = { loadCommands };
