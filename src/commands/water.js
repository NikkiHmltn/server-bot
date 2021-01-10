const discord = require('discord.js')

module.exports = {
    name: "water",
    description: "Pings the user to remind them to drink water",
    execute(message, args) {
        return message.channel.send("Rehydrate your blood cells to restore your HP. Water will accomplish this. Thank you!")
    }
}