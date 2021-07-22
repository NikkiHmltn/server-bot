module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Args undefined')
        }
        let string = args.toString()
        let splitMessage = string.split('"')
        let requestor = splitMessage[0]
        let filterMessage = splitMessage[1]
        let notifyPerson;
        let timeOfMessage = splitMessage[2].split("in")
        let timeReminder = timeOfMessage[1]
        if (requestor.includes('me')) {
            notifyPerson = message.author.id
            //run a function in here to set reminder
            //bot.message.mentions? 
            console.log(splitMessage, " split", requestor, "requestor", filterMessage, "filterMessage", timeOfMessage, "time of", timeReminder, "time reminder")

            message.channel.send(`<@${notifyPerson}> was tagged with "${filterMessage}" task in ${timeOfMessage}`)
        } else if (requestor.includes('@')) {
            let person = message.mentions.members.first()
            notifyPerson = person.id
            console.log(splitMessage, " split", requestor, "requestor", filterMessage, "filterMessage", timeOfMessage, "time of", timeReminder, "time reminder")

            message.channel.send(`<@${notifyPerson}> was tagged with "${filterMessage}" task in ${timeOfMessage}`)
        } else if (!requestor.includes('@') || !requestor.includes('me')) {
            console.log(splitMessage, " split", requestor, "requestor", filterMessage, "filterMessage", timeOfMessage, "time of", timeReminder, "time reminder")

            message.channel.send('Error getting id')
        } else {
            console.log(splitMessage, " split", requestor, "requestor", filterMessage, "filterMessage", timeOfMessage, "time of", timeReminder, "time reminder")

            message.channel.send('404 Not Found')
        }
		
	},
};