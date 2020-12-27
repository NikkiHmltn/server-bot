module.exports = {
    name: 'lore',
    description: 'Fetches lore from the db',
    args: true,
    execute(message, args) {
        if (!args[0] || args [0] === "") {
            return message.channel.send('Please make a request for the lore you would like to learn about after `!lore`\nThank you!')
        } else if (args[0] === "test") {
            return message.channel.send("Test confirmed to be working, Nikki-san!")
        }
    }
}