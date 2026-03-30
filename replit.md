# SAT MD BOT

A WhatsApp group management bot built with Node.js and [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys).

## Project Structure

- `index.js` - Main entry point, sets up WhatsApp socket and command routing
- `config.js` - Bot configuration (name, owner number, prefix)
- `commands/` - Individual command modules
  - `ai.js` - AI chatbot command (.ai)
  - `channel.js` - Channel-related commands (.channel)
  - `education.js` - Education commands
  - `fun.js` - Fun commands (.dice)
  - `menu.js` - Help menu (.menu)
  - `owner.js` - Owner commands (.pair)
  - `pastpaper.js` - Past paper command (.pastpaper)
  - `textbook.js` - Textbook command (.textbook)

## Setup

### Dependencies
- `@whiskeysockets/baileys` - WhatsApp Web API
- `axios` - HTTP requests

Install: `npm install`

### Running
```
node index.js
```

The bot starts an HTTP server on port 3000 (keepalive) and connects to WhatsApp.

### First-Time Authentication
On first run, the bot will attempt to request a pairing code for `ownerNumber` in `config.js`. You must:
1. Open WhatsApp on the owner's phone
2. Go to Settings > Linked Devices > Link a Device
3. Enter the pairing code printed in the console

Auth credentials are saved in the `auth/` directory for subsequent runs.

## Configuration (`config.js`)
- `botName` - Display name of the bot
- `ownerName` - Simbarashe Augustus Tembo 
- `ownerNumber` - 260772697513 (international format, no +)
- `prefix` - Command prefix (default: `.`)

## Workflow
- **Start application** - Runs `node index.js` as a console workflow
