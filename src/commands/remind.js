module.exports = {
	name: 'remind',
	description: 'Sets a reminder to the requester',
	execute(message, args) {
        if (!args[0] || args[0] === "") {
            return message.channel.send('Args undefined')
        }
        //showing up as an array
        //args shows as ["1", "second", "hello", ...]
        let splitMessage = args
        //to target the time we need to leave out the first index
        let timeTarget = 0;
        let filteredTime = splitMessage.filter((element,idx) => idx == timeTarget)
        let amountTimeTarget = 1
        let filteredTimeTarget = splitMessage.filter((element,idx) => idx == amountTimeTarget)
        let filteredMessage = splitMessage.slice(2)

        //to target the number of times we leave
        let reminder = () => {
            message.reply(`\n**REMINDER:**\n${filteredMessage.join(" ")}`)
        }
        if(filteredTimeTarget == 'seconds') {
            let msDelay = filteredTime * 1000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " second(s).");
            setTimeout(reminder, msDelay);
        }
        else if(filteredTimeTarget == 'minutes'){
            let msDelay = filteredTime * 60000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " minute(s).");
            setTimeout(reminder, msDelay);
        }
        else if(filteredTimeTarget == 'hours') {
            let msDelay = filteredTime * 3600000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " hour(s).");
            setTimeout(reminder, msDelay);
        }
        else if(filteredTimeTarget == "days") {
            let msDelay = filteredTime * 86400000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " day(s).");
            setTimeout(reminder, msDelay);
        }
        else if(filteredTimeTarget == 'second'){
            let msDelay = filteredTime * 1000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " second(s).");
            setTimeout(reminder, msDelay);
        }
        else if(filteredTimeTarget == 'minute') {
            console.log("hit minute")
            let msDelay = filteredTime * 60000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " minute(s).");
            setTimeout(reminder, msDelay);
        }
        else if (filteredTimeTarget == 'hour'){
            let msDelay = filteredTime * 3600000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " hour(s).");
            setTimeout(reminder, msDelay);
        }
        else if(filteredTimeTarget == 'day'){
            let msDelay = filteredTime * 86400000;
            message.reply("Your reminder has been set. I will remind you in " + filteredTime + " day(s).");
            setTimeout(reminder, msDelay);
            break;
        }
        
	}
}