module.exports = {
    name: "attack",
    description: "Sayaka-bot unleashes a devasting tazer blow.",
    execute(message, args) {
        message.channel.send(":zap: :zap:\n Do not resist, meat bag.", {
            files: ["https://media.discordapp.net/attachments/793225719731716126/793977264253042688/Screen_Shot_2020-12-30_at_3.01.55_PM.png"]
        })
    }
}