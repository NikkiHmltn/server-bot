module.exports = {
    name: 'rule',
    description: 'Lists the rules for the server',
    args: true,
    execute(message, args){
        if (!args[0] || args[0] === "") {
            return message.channel.send('Please make a request for the rule you would like to reference after `!rule`\nIf this is not what you are looking for, please see the command `!help`\nThank you!')
        } else if (args[0] === "1") {
            message.channel.send("This is an 18+ server and invitation links can only be created by moderators. If you would like to invite someone, DM a moderator and we will A) reach out to them or B) provide you with a link. If a member is found out to be underage, they will be banned from the server.")
        } else if (args[0] === "2") {
            message.channel.send("NSFW discussions directly related to Kakegurui should be kept to the nsfw-kakegurui channel. NSFW discussions of a personal nature should be held in the DMs of willing parties (see rule 4).")
        } else if (args[0] === "3") {
            message.channel.send("Credit creators. Do your best to link directly to the artists original posts (twitter, tumblr, pixiv, etc). Short of that, do your best to provide a name.")
        } else if (args[0] === "4") {
            message.channel.send("Don't be weird or a jerk. We want this to be a comfortable place to relax. If someone is acting in a way that you feel is inappropriate or makes you feel unsafe, let a mod know. This includes (but is not limited to) racism, homophobia & transphobia, sexism, as well as inappropriate comments and unwanted advances.")
        } else if (args[0] === "5") {
            message.channel.send("Keep discussions to their relevant channels. Discussion channels serve both as reference and content warnings. Excessive off-top discussions interfere with both functions. If you feel like there isn’t an appropriate place to discuss something, contact a mod and we can see about potentially making one.")
        } else if (args[0] === "6") {
            message.channel.send("In regards to voice chatting, “no” means “no” and “stop” means “stop,” for any reason. Failure to do so will result in your removal from the voice chat.")
        } else if (args[0] === "7") {
            message.channel.send("No personal photos of subjects under the age of 18. Media containing minors from reputable sites (i.e. YouTube, TikTok) is still permitted provided it meets the other preexisting content guidelines.")
        } else if (args[0] === "8") {
            message.channel.send("If you are a fan-creator for Kakegurui and are interested in getting your own yell channel, contact a moderator. Content guidelines for Yell channels fall within the already established rules of the channels, and can be further specified by the individual creators. Please be mindful of if a Yell channel is marked as NSFW or not.")
        } else if (args[0] === "9") {
            message.channel.send("Shipping discussion regarding Kirari and Sayaka should be limited to KiraSaya. Shipping discussion regarding other characters (for example, Mary and Ririka or Mary and Yumeko) are still open.")
        } else if (args[0] === "10") {
            message.channel.send(`Keep criticisms constructive, defined as **"a helpful way of giving feedback that provides specific, actionable suggestions. Rather than providing general advice, constructive criticism gives specific recommendations on how to make positive improvements. Constructive criticism is clear, to the point, and easy to put into action."** This includes fan works, as well as other discussion such as head canons and interpretations. Not everyone is going to like every particular fan work or idea, disagreements are bound to occur, but focus on engaging with topics in ways that go beyond "this is bad" or  "I don't like this."`)
        } else if (args[0] === "11") {
            message.channel.send(`Prolonged inactivity can result in you being removed from the server without warning. We want our members participating in our server! "Participation" meaning either the creation of fan content or taking part in discussions. If you feel like you need to step away from the server for a prolonged period of time for any reason, please feel free to reach out to the moderation staff so we can accommodate you.`)
        } else if (args[0].toLowerCase() === "all") {
            message.channel.send(`1) This is an 18+ server and invitation links can only be created by moderators. If you would like to invite someone, DM a moderator and we will A) reach out to them or B) provide you with a link. If a member is found out to be underage, they will be banned from the server.\n 
            2)  NSFW discussions directly related to Kakegurui should be kept to the nsfw-kakegurui channel. NSFW discussions of a personal nature should be held in the DMs of willing parties (see rule 4).\n
            3) Credit creators. Do your best to link directly to the artists original posts (twitter, tumblr, pixiv, etc). Short of that, do your best to provide a name.\n
            4) Don't be weird or a jerk. We want this to be a comfortable place to relax. If someone is acting in a way that you feel is inappropriate or makes you feel unsafe, let a mod know. This includes (but is not limited to) racism, homophobia & transphobia, sexism, as well as inappropriate comments and unwanted advances.\n 
            5) Keep discussions to their relevant channels. Discussion channels serve both as reference and content warnings. Excessive off-top discussions interfere with both functions. If you feel like there isn’t an appropriate place to discuss something, contact a mod and we can see about potentially making one.\n
            6) In regards to voice chatting, “no” means “no” and “stop” means “stop,” for any reason. Failure to do so will result in your removal from the voice chat.\n 
            7) No personal photos of subjects under the age of 18. Media containing minors from reputable sites (i.e. YouTube, TikTok) is still permitted provided it meets the other preexisting content guidelines.\n
            8) If you are a fan-creator for Kakegurui and are interested in getting your own yell channel, contact a moderator. Content guidelines for Yell channels fall within the already established rules of the channels, and can be further specified by the individual creators. Please be mindful of if a Yell channel is marked as NSFW or not.\n
            9) Shipping discussion regarding Kirari and Sayaka should be limited to KiraSaya. Shipping discussion regarding other characters (for example, Mary and Ririka or Mary and Yumeko) are still open.\n
            10) Keep criticisms constructive, defined as **"a helpful way of giving feedback that provides specific, actionable suggestions. Rather than providing general advice, constructive criticism gives specific recommendations on how to make positive improvements. Constructive criticism is clear, to the point, and easy to put into action."** This includes fan works, as well as other discussion such as head canons and interpretations. Not everyone is going to like every particular fan work or idea, disagreements are bound to occur, but focus on engaging with topics in ways that go beyond "this is bad" or  "I don't like this."\n
            11) Prolonged inactivity can result in you being removed from the server without warning. We want our members participating in our server! "Participation" meaning either the creation of fan content or taking part in discussions. If you feel like you need to step away from the server for a prolonged period of time for any reason, please feel free to reach out to the moderation staff so we can accommodate you.`)
        }
    }
}