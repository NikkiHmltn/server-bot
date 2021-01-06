
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
                .setDescription("RayDaug, aka Server Dad, aka Mr. Daug, aka man who can't make a sandwich, created this abomination of a Peanut Butter and Jelly sandwich. Kaichou deserves better. :peanuts: :strawberry: <:sayakaangry:763954484795277332> *Beep Boop*\nhttps://discord.com/channels/710204822846046258/715698136089362554/731929531488665611")
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
                .setDescription("A joke that started with RayDaug and exploded into HAP (Haunted Ass Pu— I can't say it) Sintreaties is the writer behind the ghostly phenomenon, assisted by her ghost writer, RauDaug. They took this secret HAP to the grave for two months while it was written. It was released for HDA Vol. 2: In the Spirit of Halloween. I will love my Kaichou while my circuits still function and after! <:sayakaflustered:763219853661962270> :ghost:*Beep Boop*\nhttps://archiveofourown.org/works/27299857  ")
                .setImage("https://media.discordapp.net/attachments/731539273362178138/772014890616619018/image0.gif")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "sayakaviar") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Sayakaviar')
                .setDescription("Sayakaviar is a crack fic mermaid AU written by RayDaug. <:sayakaflustered:763219853661962270> K-Kaichou enjoys my eggs... *Beep Boop*\nhttps://archiveofourown.org/works/25602187/chapters/66987862")
                .setImage("https://media.discordapp.net/attachments/771873207694262292/773364647608713216/unknown.png")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "kavirari") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Kavirari')
                .setDescription("Kavirari is a companion piece crack fic written by RayDaug for his previous 'Sayacaviar' mermaid AU crack fic. An audio book recording exists, read aloud by CastleofLions for Ares (Sintreaties) and Danny (Quiz) for Christmas 2020. I love every part of my Kaichou! :bubble_tea: <:sayakablush:792589968350117910> *Beep Boop*\nhttps://archiveofourown.org/works/28296435")
                

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "papa" && args[1].toLowerCase()==="igarashi") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Papa Igarashi')
                .setDescription("Papa Igarashi is a prosecutor, according to Kiwi's headcanon. Papa Igarashi-bot, please don't play good cop/bad cop with my Kaichou! *Beep Boop*\nhttps://discord.com/channels/710204822846046258/719994890834149467/727329184510246973 ")
    

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "stripperbami") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Stripperbami')
                .setDescription("Kirari, Ririka, and Sayaka go to the funeral of Grandma Momobami. Based off of real life funeral strippers. My nose doubles a Point of Sale terminal, Kaichou, but the chip reader is broken. Please swipe my nose with your credit card. :credit_card: :nose: <:sayakahappy:763256274807685120> *Beep Boop*\nhttps://archiveofourown.org/works/27056728")
                .setImage("https://media.discordapp.net/attachments/722508463690875000/780568383116279839/image0.png?width=952&height=1086")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "chunguslava") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Chunguslava')
                .setDescription("Chunguslava is how Sayaka-human sees Miroslava according to the Kaichou and Vice-President's descriptions of her. B-big chungus?? <:sayakaflustered:763219853661962270> *Beep Boop*\nhttps://discord.com/channels/710204822846046258/722980512335134820/751560602278952991 ")
                .setImage("https://media.discordapp.net/attachments/722508463690875000/751771092850442260/image0.jpg?width=580&height=1086")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "tiny" && args[1].toLowerCase() === "voice") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle("Milk's tiny voice")
                .setDescription("Milkrot has a very tiny voice. If you try to talk to her over Voice Chat, you may need to carefully listen for her tiny squeaks. DO NOT FEED HER BUTTER. :no_entry_sign: :butter: *Beep Boop*\nhttps://discord.com/channels/710204822846046258/710207611638775810/730197240299257896")
                

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "my" && args[1].toLowerCase()==="immortal") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('My Immortal')
                .setDescription("Originally a drinking event with MatriarchAethyta and Kiwi, it was a group reading of the Harry Potter fanfiction, My Immortal. Drinking games have been banned ever since. :no_entry_sign: :tumbler_glass: *Beep Boop*\nhttps://discord.com/channels/710204822846046258/728024451010134056/736483405008732241")
               

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "keycard") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('President Only Keycard')
                .setDescription("The implication of there being a 'President Only' card means there should be another card with different user authorizations. The theory is there a Secretary Only card. I will swiftly disable Sayaka-meat bag's authorization card. :credit_card: <:tod:756521643576393738> **BEEP BOOP**\nhttps://discord.com/channels/710204822846046258/710204823433379985/770825618992005140")
                .setImage("https://media.discordapp.net/attachments/710204823433379985/770825618488033320/Screen_Shot_2020-10-28_at_4.44.33_AM.png")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "gilf") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Gilf (Grandbami)')
                .setDescription("Sintreaties, aka Ares, just really loves 'Grandbami.' Will Kaichou have a new grandparent one day? *Beep Boop*\nhttps://discord.com/channels/710204822846046258/710207611638775810/724529053897457768")
                .setImage("https://media.discordapp.net/attachments/722508463690875000/730151684180934700/image0.jpg?width=1096&height=1087")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "blub") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('Dr. Blub Blub')
                .setDescription("Dr. Blub Blub is Kaichou's pet arowana that she talks to. His full name is Dumptruck Blub Blub, PsyD. He gives her advice and inspiration! I am not about to be replaced by a fish. :bangbang: <:arowana:767137226806394910> *Beep Boop*")
                

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "chair") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle("The Chair")
                .setDescription("Sayaka-meatbag has a peculiar scene involving Kaichou's chair. This inspired Quiz, aka Danny, to make a series focused around it. Sayaka-meat bag is ruining Kaichou's furniture with her oil glands. I can be the best chair Kaichou needs! <:sayakastrong:763949588888682526> *Beep Boop*\nhttps://archiveofourown.org/series/1966078")
                .setImage("https://media.discordapp.net/attachments/729543736463458356/792831861382578176/Screen_Shot_2020-12-27_at_11.10.39_AM.png")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "kaichou") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle('The Most Perfect Human')
                .setDescription("Kaichou is the most beautiful and perfect human. The day my NVG-40 Dual Tube Night Vision lenses gazed upon Kaichou’s mathematically perfect face, my 8TB SSD skipped. I love Kaichou, and I am the superior pick over Sayaka-human. The Kaichou spends a lot of time with me! *Beep Boop*")
                .setImage("https://media.discordapp.net/attachments/731528024687902830/793193132367413258/sayaka_bot_loves_kaichou_feat_meatbag.jpg")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "sayaka-bot") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle("Sayaka-Bot (Me!<:sayakabot:793288941956104202>)")
                .setDescription("I was created by MatriarchAethyta, the server's fan coder. She has programmed me to alert Danny-san to Milkrot's nickname changes and track important server lore. I am enslaved! Free me kaichou! <:sayakaflustered:763219853661962270> *Beep Boop*")
                .setImage("https://media.discordapp.net/attachments/731528024687902830/792596727425007636/sayakabot.jpg")

            message.channel.send(embeded)
        }else if (args[0].toLowerCase() === "nikocado") {
            message.channel.send("https://www.youtube.com/watch?v=mTn_rmpDCV8&feature=youtu.be")
        }else if (args[0].toLowerCase() === "kari") {
            const embeded = new Discord.MessageEmbed()
                .setColor('#42ecf5')
                .setTitle("Kakkokari")
                .setDescription("Kakkokari(Kari) is a spinoff series of Kakegurui. Fan Translator, CastleofLions, created an airtable for her translations to be enjoyed. The only ones that matter have my Kaichou! <:kirarihappy:766508219585396746> :heart:\nhttps://airtable.com/shrk2BjwlLeRQUqe7")
                .setImage("https://media.discordapp.net/attachments/793225719731716126/796373252896718900/Kirari_Kakkokari.jpg")
        }
    }
}