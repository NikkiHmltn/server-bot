module.exports = {
    name: "attack",
    description: "Sayaka-bot unleashes a devasting tazer blow.",
    execute(message, args) {
        message.channel.send(":zap:Do not resist, meat bag.:zap:", {
            files: ["https://media.discordapp.net/attachments/793225719731716126/793991591446315048/Screen_Shot_2020-12-30_at_3.58.52_PM.png"]
        })
    }
}