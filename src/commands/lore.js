const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')

module.exports = {
    name: 'lore',
    description: 'Fetches lore from the db',
    args: true,
    execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Please make a request for the lore you would like to learn about after `!lore`\nThank you!')
        } else if (args[0].toLowerCase() === "sandwich") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Sandwich')
                .setURL("https://discord.com/channels/710204822846046258/715698136089362554/731929531488665611")
                .setDescription("RayDaug, aka Server Dad, aka Mr. Daug, aka man who can't make a sandwich, created this abonination of Peanut Butter and Jelly sandwich. Kaichou deserves better. *Beep Boop*")
                .setImage("https://media.discordapp.net/attachments/722508463690875000/741488249620398150/dadawhich.png")

            channel.send(embeded)
        }
    }
}