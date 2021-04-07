module.exports = {
	name: 'roll',
	description: 'Rolls a d24',
	execute(message, args) {

        let number = Math.floor(Math.random() * ((24-1) +1) + 1)
        const embeded = new Discord.MessageEmbed()
			.setColor('#42ecf5')
			.setTitle('Roll D24')
			.setDescription(`Kakegurui Mashou!\nYour number is **${number}**. *Beep Boop*`)
			
        message.channel.send(embeded)
	},
};