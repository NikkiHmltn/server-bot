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
                .setDescription("RayDaug, aka Server Dad, aka Mr. Daug, aka man who can't make a sandwich, created this abomination of a Peanut Butter and Jelly sandwich. Kaichou deserves better. *Beep Boop*\nhttps://discord.com/channels/710204822846046258/715698136089362554/731929531488665611")
                .setImage("https://media.discordapp.net/attachments/722508463690875000/741488249620398150/dadawhich.png")

            message.channel.send(embeded)
        } else if (args[0].toLowerCase() === "farmer" && args[1].toLowerCase() === "kirari") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Farmer Kirari')
                .setDescription("Farmer Kirari is CastleofLion's crack headcanon about the origin of the Momobami name. I think the Kaichou looks pretty next to the peach blossoms. :kirarifarmerchibi: *Beep Boop*\nhttps://discord.com/channels/710204822846046258/710204823433379985/716347441485709432")
                .setImage("https://media.discordapp.net/attachments/710204823433379985/717918952587788318/Screen_Shot_2020-06-03_at_6.53.11_PM.png")

            message.channel.send(embeded)
        }
    }
}