module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Args undefined')
        }
        console.log(args)
        //showing up as an array
        //args shows as ["1", "second", "hello", ...]
        let splitMessage = args
        //to target the time we need to leave out the first index
        let timeTarget = 0;
        let filteredTime = args.filter((element,idx) => idx ==timeTarget)
        let amountTimeTarget = 1
        let filteredTimeTarget = args.filter((element,idx) => idx ==amountTimeTarget)
        let filteredMessage = args.slice(2)
        //to target the number of times we leave
        let reminder = () => {
            message.reply(`\n**REMINDER:**\n${filteredMessage.join(" ")}`)
        }
        switch(filteredTimeTarget) {
            case 'seconds': {
              let msDelay = filteredTime * 1000;
              message.reply("Your reminder has been set. I will remind you in " + filteredTime + " second(s).");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'minutes': {
              let msDelay = filteredTime * 60000;
              message.reply("Your reminder has been set. I will remind you in " + filteredTime + " minute(s).");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'hours': {
              let msDelay = filteredTime * 3600000;
              message.reply("Your reminder has been set. I will remind you in " + filteredTime + " hour(s).");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'days': {
              let msDelay = filteredTime * 86400000;
              message.reply("Your reminder has been set. I will remind you in " + filteredTime + " day(s).");
              setTimeout(reminder, msDelay);
              break;
            }
        }
        switch(filteredTimeTarget) {
            case 'second': {
              let msDelay = filteredTime * 1000;
              message.reply("Your reminder has been set. I will remind you in " + filteredTime + " second(s).");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'minute': {
              let msDelay = splitMessage[0].slice(0, 2) * 60000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + " minute(s).");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'hour': {
              let msDelay = splitMessage[0].slice(0, 2) * 3600000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + " hour(s).");
              setTimeout(reminder, msDelay);
              break;
            }
            case 'day': {
              let msDelay = splitMessage[0].slice(0, 2) * 86400000;
              message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, 2) + " day(s).");
              setTimeout(reminder, msDelay);
              break;
            }
        }
        
	}
}