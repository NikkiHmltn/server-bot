module.exports = {
	name: 'flip',
	description: 'Flips a coin for heads or tails!',
	execute(message, args) {

        function kakeguruiMashou() {
            let number = Math.floor(Match.random() * 1)
            console.log(number)
            if(number === 0){
                message.channel.send('Kakegurui Mashou!\nHeads!');
            } else {
                message.channel.send('Kakegurui Mashou!\nTails!');
            }
        }

        message.channel.send("Declare heads or tails.")
        .then(()=>{
            console.log("in here")
            setTimeout(kakeguruiMashou, 10000)
        })
        
	},
};