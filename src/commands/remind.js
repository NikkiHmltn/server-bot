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
        console.log(filteredMessage)
        console.log(splitMessage[0].slice(-1), "should be the amount of time")
        console.log(splitMessage[0].slice(0, -1), "msDelay");
        let reminder = () => {
            message.reply(`\n**REMINDER:**\n${filteredMessage}`)
        }
        switch(splitMessage[0].slice(-7)) {
            case 'seconds': {
              let msDelay = splitMessage[0].slice(0, 2) * 1000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "seconds.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'minutes': {
              let msDelay = splitMessage[0].slice(0, 2) * 60000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "minutes.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'hours': {
              let msDelay = splitMessage[0].slice(0, 2) * 3600000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "hours.");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'days': {
              let msDelay = splitMessage[0].slice(0, 2) * 86400000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + "days.");
              setTimeout(reminder, msDelay);
              break;
            }
        }
	}
}