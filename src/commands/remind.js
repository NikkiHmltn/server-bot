module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Args undefined')
        }
        console.log(args)
        let splitMessage = args.split(' ');
        let filteredMessage = args.replace(splitMessage[0], '');
        let reminder = () => {
            message.reply(`\n**REMINDER:**\n${filteredMessage}`)
        }
        switch(splitMessage[0].slice(-1)) {
            case 'seconds': {
              let msDelay = splitMessage[0].slice(0, -1) * 1000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "seconds.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'minutes': {
              let msDelay = splitMessage[0].slice(0, -1) * 60000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "minutes.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'hours': {
              let msDelay = splitMessage[0].slice(0, -1) * 3600000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "hours.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'days': {
              let msDelay = splitMessage[0].slice(0, -1) * 86400000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + "days.");
              setTimeout(reminder, msDelay);
              break;
            }
		
	},
};