module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        let splitMessage = args.split('"')
        let filterMessage = splitMessage[0]
        let notifyPerson;
        let timeOfMessage = splitMessage[2]
        if (filterMessage.includes('me')) {
            notifyPerson = message.author.user.id
            //run a function in here to set reminder
            //bot.message.mentions? 
            message.channel.send(`@<${notifyPerson}> was tagged with "${filterMessage}" task in ${timeOfMessage}`)
        } else if (filterMessage.includes('@')) {
            let person = messge.mentions.members.first()
            notifyPerson = person.user.id
            message.channel.send(`@<${notifyPerson}> was tagged with "${filterMessage}" task in ${timeOfMessage}`)
        } else if (!filterMessage.includes('@') || !filterMessage.includes('me')) {
            message.channel.send('Error getting id')
        } else {
            message.channel.send('404 Not Found')
        }
		
	},
};