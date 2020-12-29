require('dotenv').config();

const fs = require('fs')
const Sequelize = require('sequelize')
const db = require('../models')
const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}})
bot.commands = new Discord.Collection()
const prefix = "!"

const commandFiles = fs.readdirSync(__dirname + "/commands").filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log(`Sayaka-bot has logged in`)
})

bot.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`I can't find anything like that.`);
}
})

bot.on('guildMemberAdd', (member) => {
    member.guild.channels.get('729812555853201508').send("Welcome to the server! We're happy to have you.\n1. I'm Sayaka-bot! I help out the human mods around here. Check out my list of commands at `!help`\n2. Be sure to get acquainted with the rules in <#739851594069180508>\n3. We have a quick <#720780348904046684> that you can fill out so we can get to know you better. It includes things like the name you'd prefer to go by and your pronouns.\n4. Be sure to check the pins in various channels. There's extremely cursed content and good lore in there.\n5. Get in touch with any member of the mod team if you have any questions or concerns.\n6. Feel free to join a discussion already in progress or start a discussion of your own! <:sayakahappy:763256274807685120> *Beep Boop*")
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
