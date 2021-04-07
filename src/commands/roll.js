module.exports = {
	name: 'flip',
	description: 'Flips a coin for heads or tails!',
	execute(message, args) {

        let number = Math.floor(Math.random() * 24)
        console.log(number)
        message.channel.send(`-dice sounds- ${number}`)
	},
};