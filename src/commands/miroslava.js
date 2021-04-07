module.exports = {
    name: "miroslava",
    description: "Choose a side, obviously miroslava ftw amirite?",
    execute(message, args) {
        message.channel.send("Choose a side.", {
            files: ["https://media.discordapp.net/attachments/793225719731716126/794325521127047168/miroslava.png"]
        })
    }
}