const { Message } = require("discord.js")

module.exports = {
    name: 'thanks',
    description: "show your love to sayaka-bot",
    execute(message, args) {
        message.channel.send("Your appreciation is noted, not-Kaichou. <:sayakabot:793288941956104202>")
    }
}