module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Args undefined')
        }
        console.log(args)
        //showing up as an array
        let splitMessage = args
        let leaveOut = 0;
        let filteredMessage = args.filter((element,idx) => idx !== leaveOut)
        let reminder = () => {
            message.reply(`\n**REMINDER:**\n${filteredMessage.join(" ")}`)
        }
        switch(splitMessage[0].slice(-7)) {
            case 'seconds': 
            case 'second': {
              let msDelay = splitMessage[0].slice(0, 2) * 1000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "seconds.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'minute':
            case 'minutes': {
              let msDelay = splitMessage[0].slice(0, 2) * 60000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "minutes.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'hour':
            case 'hours': {
              let msDelay = splitMessage[0].slice(0, 2) * 3600000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "hours.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'day':
            case 'days': {
              let msDelay = splitMessage[0].slice(0, 2) * 86400000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "days.");
              setTimeout(reminder, msDelay);
              break;
            }
        }
	}
}