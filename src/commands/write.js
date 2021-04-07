module.exports = {
    name: "write",
    description: "Sends a list of commands to the user",
    execute(message, args) {
        message.channel.send("Need help with a prompt? Try the Mad Scientist's writing prompt generator! For any suggesstions you may have, message MatriarchAethyta. Allow time for website to load, humans are inefficient with programming load times. \nhttps://kakegurui-prompt-generator.herokuapp.com/")
    }
}