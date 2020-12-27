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

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (message.content === '!ping') {
        message.channel.send('Pong!')
    } else if (message.content === prefix) {
        console.log("MESSAGE CONTENT", message.content)
        console.log(args, "ARGS")
        console.log(args.length, "ARGS LENGTH")
        console.log(args[0], "ARGS AT 0")
        if (!args.length) {
			return message.channel.send(`Understood. Dumping Kaichou trivia, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
        }
        
        message.channel.send(`Command name: ${command}\nArugments: ${args}`)
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
