require('dotenv').config();

const fs = require('fs')
const Sequelize = require('sequelize')
const db = require('../models')
const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}})
bot.commands = new Discord.Collection()
const prefix = "!lore"

const commandFiles = fs.readdirSync(__dirname + "/commands").filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
}

bot.commands.set(command.name, command)

bot.on('ready', () => {
    console.log(`Sayaka-bot has logged in`)
})

bot.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'ping') {
        console.log(args, "ARGS")
        console.log(args.length, 'ARGS LENGTH')
        bot.commands.get('ping').execute(message, args)
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
