require('dotenv').config();

const fs = require('fs')
const Sequelize = require('sequelize')
const db = require('../models')
const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}})
bot.commands = new Discord.Collection()
const prefix = "!lore"

bot.on('ready', () => {
    console.log(`Sayaka-bot has logged in`)
})

bot.on('message', (message) => {
    if (message.content === '!ping') {
        message.channel.send('Pong!')
    } else if (message.content === prefix) {
        message.channel.send('Do you really want me to dump my databases of Kaichou trivia?')
    }
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {

    const changeEmbed = new Discord.MessageEmbed()
        .setColor('#42ecf5')
        .setDescription(`Danny-san, ***MILKROT***  has become ***${newMember.nickname}***. *Beep Boop*`)

    if(oldMember.id === "717816505777127514") {
        bot.channels.cache.get("729543736463458356").send(changeEmbed)
    }
})



bot.login(process.env.SAYAKA_BOT_TOKEN);
