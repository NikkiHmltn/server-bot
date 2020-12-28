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
                .setDescription(`Farmer Kirari is CastleofLion's crack headcanon about the origin of the Momobami name. I think the Kaichou looks pretty next to the peach blossoms. <:kirarifarmerchibi:736053273487998986> *Beep Boop*\nhttps://discord.com/channels/710204822846046258/710204823433379985/716347441485709432`)
                .setImage("https://media.discordapp.net/attachments/710204823433379985/717918952587788318/Screen_Shot_2020-06-03_at_6.53.11_PM.png")

            message.channel.send(embeded)
            
        }else if (args[0].toLowerCase() === "cokegurui") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Cokegurui')
                .setDescription("A fic in which Sayaka-human snorts cocaine off of Kauchou's incredible abdominal muscles. Started as a joke, and now it is stored in the lore archives. I am the superior Sayaka, as my cocaine intake valve has no adverse affects to it along with a 250% greater storage capacity. Choose me, Kaichou! :rice: *Beep Boop*\nhttps://archiveofourown.org/works/26187331")
                .setImage("https://media.discordapp.net/attachments/719994890834149467/731314262642786355/image0.png")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "hap") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('HAP (Haunted Ass P*ssy)')
                .setDescription("A joke that started with RayDaug and exploded into HAP (Haunted Ass Pu— I can't say it) Sintreaties is the writer behind the ghostly phenomenon, assisted by her ghost writer, RauDaug. They took this secret HAP to the grave for two months while it was written. It was released for HDA Vol. 2: In the Spirit of Halloween. I will love my Kaichou while my circuits still function and after! <:sayakaflustered:763219853661962270> :ghost:\nhttps://archiveofourown.org/works/27299857  *Beep Boop*")
                .setImage("https://media.discordapp.net/attachments/731539273362178138/772014890616619018/image0.gif")

            message.channel.send(embeded)
        }
    }
}