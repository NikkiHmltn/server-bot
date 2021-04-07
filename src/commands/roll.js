module.exports = {
	name: 'roll',
	description: 'Rolls a d24',
	execute(message, args) {

        let number = Math.floor(Math.random() * ((24-1) +1) + 1)
        console.log(number)
        message.channel.send(`-dice sounds- ${number}`)
	},
};