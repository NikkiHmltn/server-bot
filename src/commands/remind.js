module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Args undefined')
        }
        let string = args.toString()
        let splitMessage = string.split(' ')
        let requestor = splitMessage[0]
        let filterMessage = args.replace(splitMessage[0], '')
        let notifyPerson;
        let timeOfMessage = splitMessage[2].split(" ")
        let timeReminder = timeOfMessage[1]
        if (requestor.includes('me')) {
            notifyPerson = message.author.id
            //run a function in here to set reminder
            //bot.message.mentions? 
            console.log(splitMessage)
            // message.channel.send(`<@${notifyPerson}> was tagged with "${filterMessage}" task in ${timeOfMessage}`)
        } else if (requestor.includes('@')) {
            let person = message.mentions.members.first()
            notifyPerson = person.id
            console.log(splitMessage)
            // message.channel.send(`<@${notifyPerson}> was tagged with "${filterMessage}" task in ${timeOfMessage}`)
        } else if (!requestor.includes('@') || !requestor.includes('me')) {

            message.channel.send('Error getting id')
        } else {

            message.channel.send('404 Not Found')
        }
		
	},
};