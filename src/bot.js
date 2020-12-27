require('dotenv').config();

const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}})
bot.commands = new Discord.Collection()

bot.on('ready', () => {
    console.log(`Sayaka has logged in`)
})

bot.on('message', (message) => {
    console.log(message.content)
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {

    const changeEmbed = new Discord.MessageEmbed()
        .setColor('#42ecf5')
        .setDescription(`Kaichou, ***MILKROT***  has become ***${newMember.nickname}***. *Beep Boop*`)

    if(oldMember.id === "717816505777127514") {
        bot.channels.cache.get("729543736463458356").send(changeEmbed)
    }
})

bot.login(process.env.SAYAKA_BOT_TOKEN);
