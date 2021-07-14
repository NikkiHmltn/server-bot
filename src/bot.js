require('dotenv').config();

const fs = require('fs')
const Sequelize = require('sequelize')
const db = require('../models')
const cron = require('cron')
const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}})
bot.commands = new Discord.Collection()
const prefix = "!"
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


const birthdays = require('./birthdays.js')
const token = process.env['SAYAKA_BOT_TOKEN']

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
        message.channel.send(`(つ◉益◉)つJABAMI YUMEKOOOOOOO`, {

            files: ["https://cdn.discordapp.com/attachments/793225719731716126/829538960900358215/JABAMI_YUMEKO_2.webm"]
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

// let scheduledMessage = new cron.CronJob('00 00 17 * * 4', () => {
    
//     let person = bot.guilds.cache.get("710204822846046258").members.cache.get("176874730182148096")
//     person.send("Ray, please don't forget to post a straw poll for the server's Weekly Discussions. Thank you!")
        
// });
// scheduledMessage.start()


let birthdayTest = new cron.CronJob('00 00 00 * * *', () => {
  let channel = bot.channels.cache.get("731539273362178138");
  let birthDates = birthdays.birthdays
  birthDates.forEach(birthObj =>{
    let date = birthObj.birthday
    let dateMonth = date.getMonth()
    let dateDay = date.getDay()
    let currentDate = new Date()
    let currentMonth = new Date().getMonth()
    let currentDay = new Date().getDay()
    if(dateMonth == currentMonth &&  dateDay == currentDay){
      let person = birthObj.id
      channel.send(`Happy Birthday <@${person}>! You have survived another solar cycle around the earth. Congratulations.`);
    }
  })
},null, true, "America/Los_Angeles")
birthdayTest.start()

const newWorks = [];
const ficScrape = async () => {
    
    const browser = await puppeteer.launch({
			args: [
				'--no-sandbox',
			]
    })
    const page = await browser.newPage()
    await page.goto("https://archiveofourown.org/tags/Igarashi%20Sayaka*s*Momobami%20Kirari/works");
    const pageData = await page.evaluate(()=>{
        return {
            html: document.documentElement.innerHTML,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    })
    
    const $ = cheerio.load(pageData.html)
    
    const authors = ["DaughterOfTheKosmos", "AbominableKiwi", "MILKROT", "xXSintreatiesXx", "Salty_Bok_Choy", "wellthizizdeprezzing", "TwoStepsBehind", "KiraQuiz", "silversword", "drawanderlust", "RayDaug", "sharksncoldbrew", "lira777", "Dweebface", "VR_Silvers", "gata_mala", "nawaki", "NoxCounterspell", "Hiss", "TwoStepsBehind", "Uncleankle", "kirarisbitch", "Ladyjay1616", "LarkinUniverse", "MsArtheart"]

    $("div[class='header module']").each((i, element) =>{
        const author = $(element)
            .find("h4")
            .children("a").eq(1)
            .text()
        const time = $(element)
            .find(".datetime")
            .text()
        const titleLink = $(element)
            .find("h4")
            .children("a").eq(0)
            .attr("href")
        let worksData = {
            titleLink,
            author, 
            time,
        }
       //ao3 stores data in euro format dd mm yyyy get date now and change to euro format
        let now = new Date()
        let month = now.toLocaleString('default', {month: 'short'})
        let euroDate = now.getDate() + " " + month + " " + now.getFullYear()
        //if euroDate and worksdata.time ==
        if (euroDate == worksData.time) {
            //then compare worksdata.author to a list of authors from server
            for (let i = 0; i < authors.length; i++) {
                if (worksData.author == authors[i]){
                    if (newWorks.length !== 0 ){
                        console.log("before for loop works is not 0")
                        for(let i=0; i < newWorks.length; i++) {
                            if(worksData.date === newWorks[i].date && worksData.author == newWorks[i].author && worksData.titleLink == newWorks[i].titleLink){
                                console.log("before return they all match")
                                return;
                            } else if (worksData.date !== newWorks[i].date) {
                                console.log("before splice dates dont match")
                                newWorks.splice(i, 1)
                                return;
                            } else{
                                console.log("post will be here to server")
                                newWorks.push(worksData)
                            }
                        }
                    } else {
                        console.log("post here 2")
                        let linkHalf = newWorks[i].titleLink
                        let channel = bot.channels.cache.get("710207967009439765");
                        channel.send(`https://archiveofourown.org${linkHalf}`)
                        newWorks.push(worksData)
                    }
                                        
                }
            }
        }
    })
    console.log("before close", newWorks)
      await browser.close()
}

let fanficScrape = new cron.CronJob('0 0,6,12,18 * * *', () => {
  ficScrape()
})
fanficScrape.start()



bot.on('guildMemberUpdate', (oldMember, newMember) => {
    const changeEmbed = new Discord.MessageEmbed()
        .setColor('#42ecf5')
        .setDescription(`Danny-san, ***MILKROT***  has become ***${newMember.nickname}***. *Beep Boop*`)

    if(oldMember.id === "717816505777127514") {
        if(oldMember.nickname !== newMember.nickname) {
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

bot.login(token).then(() => {
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
