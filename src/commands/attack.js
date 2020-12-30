module.exports = {
    name: "attack",
    description: "Sayaka-bot unleashes a devasting tazer blow.",
    execute(message, args) {
        message.channel.send("<:sayakataze:720068601519800450> :zap: :zap:\n Do not resist, meat bag.", {
            files: ["https://media.discordapp.net/attachments/793225719731716126/793958497665810463/Screen_Shot_2020-12-30_at_1.45.29_PM.png"]
        })
    }
}