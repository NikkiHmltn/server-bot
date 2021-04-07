require('dotenv').config();

const fs = require('fs')
const Sequelize = require('sequelize')
const db = require('../models')
const cron = require('cron')
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

bot.on('message', async message => {

    let loveWords = ["love sayaka bot", "love sayaka-bot", "love you sayaka-bot", "love you sayaka bot", "love you, sayaka-bot", "love, sayaka-bot", "love you, sayaka bot", "love, sayaka bot"]
    for (let i = 0; i < loveWords.length; i++) {
        let lowercase = message.content.toLowerCase()
        if(lowercase.includes(loveWords[i])) {
        const currentDate = new Date()
        message.reply(`:ballot_box_with_check: *Read at ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}* UTC`)
        }
    }
    
    let thanks = ["thanks sayaka bot", "thanks sayaka-bot", "thank you sayaka-bot", "thank you sayaka bot"]
    for (let i = 0; i < thanks.length; i++) {
        let smallMsg = message.content.toLowerCase()
        if (smallMsg.includes(thanks[i])) {
            try {
                await message.react("793288941956104202")
                await message.react("👍")
            } catch (err) {
                console.error("one emoji failed to react")
            }
        }
    }

    let kakegurui = "kakegurui mashou"
    let smallKake = message.content.toLowerCase()
    if (smallKake.includes(kakegurui)) {
        message.channel.send(`J̵̧̟̜̠̠̻̏̐A̴̢̧͓̙͉̱̹̠̗̓̓͑͂͜͝B̶̫͚̭̣̹̰̼̖̓̇͗͌̇̽̄͘͜A̷̲͚̞̅̓̄̑̀M̷̨̰̜̬͍̥̚I̴̢͍͈͕̘̲̲̮̪̬̓̆̈́̏̅̍͊̉̕ ̸̡̜̖͉̠͉̰̺̀̎̎̌̈́͊̈́̓͠Ỳ̴̗̘̲̮̳͑Ų̸͍̟̳̞͍̟̜͓̒̒̅͋̓͊Ḿ̶̨̟̠̦̲̮̣̬̘̊̿̈́ͅḘ̶͇̱͙̣̹̙̪͋̂̎̈́͌̃̃̕̚K̵̠͍̱̹̺̟̋̽̿O̵̹̩̠͉̱͖̜̰̽Ơ̶͈̪̺̮̗̗̜̝͉̾̾͜O̴̡̺͚̗̟͍͋̉̓̉Ö̵̧̨͈̜͚͓́̎̇̎͐̐̕͘͠Ò̵̢̧̱̣̮̠͖͈̍̔͘͜O̴̼͙̲͆͗͒̏̀̆͠ͅÖ̶̯́͆`, {
            
            files: ["https://media.discordapp.net/attachments/793225719731716126/829465510340329522/Screen_Shot_2021-04-07_at_2.19.07_PM.png?width=1822&height=1139"]
        })

        
    }
    
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

let scheduledMessage = new cron.CronJob('00 00 17 * * 4', () => {
    
    let person = bot.guilds.cache.get("710204822846046258").members.cache.get("176874730182148096")
    person.send("Ray, please don't forget to post a straw poll for the server's Weekly Discussions. Thank you!")
        
});
scheduledMessage.start()

bot.on('guildMemberUpdate', (oldMember, newMember) => {
    const changeEmbed = new Discord.MessageEmbed()
        .setColor('#42ecf5')
        .setDescription(`Danny-san, ***MILKROT***  has become ***${newMember.nickname}***. *Beep Boop*`)

    if(oldMember.id === "717816505777127514") {
        if(oldMember.nickname !== newMember.nickname) {
            console.log(oldMember.id)
            console.log(newMember.nickname)
            bot.channels.cache.get("729543736463458356").send(changeEmbed)
        } else {
            console.log(oldMember.nickname, newMember.nickname)
        }
        
    }
})

bot.on('guildMemberAdd', (member) => {

    const welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#42ecf5')
    .setDescription("Welcome to the server! We're happy to have you.\n1. I'm Sayaka-bot! I help out the human mods around here. Check out my list of commands at `!help`\n2. Be sure to get acquainted with the rules in <#739851594069180508>\n3. We have a quick <#720780348904046684> that you can fill out so we can get to know you better. It includes things like the name you'd prefer to go by and your pronouns.\n4. Be sure to check the pins in various channels. There's extremely cursed content and good lore in there.\n5. Get in touch with any member of the mod team if you have any questions or concerns.\n6. Feel free to join a discussion already in progress or start a discussion of your own! <:sayakahappy:763256274807685120> *Beep Boop*")

    member.guild.channels.cache.get("729812555853201508").send(welcomeEmbed)
})

bot.login("token").then(() => {
    // console.log("I am ready");
    // let guild = bot.guilds.cache.get("710204822846046258")
    
    
    // console.log(guild.members.cache, "BOT.GUILDS.CACHE.GET(710204822846046258).MEMBERS.CACHE")
    // if(guild && guild.members.cache.get('425792318562369536')){
    //         scheduledMessage = new cron.CronJob('00 25 18 * * 6', () => {
    //             guild.member.cache.get('425792318562369536').send("test").then(() => bot.destroy());
    //         });
    //         scheduledMessage.start()
    //         console.log(scheduledMessage)
    // } else {
    //     console.log("nope");
    //     console.log(guild.member.cache)
    //     console.log(guild)
        
    //     //if the bot doesn't have guild with the id guildid
    //     // or if the guild doesn't have the channel with id channelid
    // }
    // bot.destroy();

});


bot.login(process.env.SAYAKA_BOT_TOKEN);
